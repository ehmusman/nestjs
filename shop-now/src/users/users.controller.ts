import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Delete,
    Param,
    Query,
    NotFoundException,
    Session,
    UseGuards
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user-dto';
import { Serialize } from 'src/interceptors/serialize-interceptor';
import { UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user-decorator';
import { User } from './user.entity';
import { AuthGuard } from 'src/guards/auth.guard';
@Controller('auth')
@Serialize(UserDto)
export class UsersController {
    constructor(
        private userService: UsersService,
        private authService: AuthService
        ) { }
    
    @Post("/signup")
    async createUser(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await  this.authService.signup(body.email, body.password)
        session.userId = user.id
        return user
    }

    @Post("/signin")
    async signin(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signin(body.email, body.password)
        session.userId = user.id
        return user
    }
    // @Get("/whoAmI")
    // async whoAmI(@Session() session: any) {
    //     return this.userService.findOne(session.userId)
    // }
    @Get("/whoAmI")
    @UseGuards(AuthGuard)
    async whoAmI(@CurrentUser() user: User) {
        return user
    }
    @Post("/signout")
    async signout(@Session() session: any) {
        session.userId = null
    }
    @Get("/user/:id")
    async findUser(@Param("id") id: string) {
        const user = await this.userService.findOne(parseInt(id))
        console.log("userrr", user)
        if (!user) {
            throw new NotFoundException("User Not Found")
        }
        return user
    }

    @Get("/users")
    findAllUsers(@Query("email") email: string) {
        return this.userService.find(email)
    }

    @Delete("/:id")
    removeUser(@Param("id") id: string) {
        return this.userService.remove(parseInt(id))
    }

    @Patch("/:id")
    updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
        return this.userService.update(parseInt(id), body)
    }


}
