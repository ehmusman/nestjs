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
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user-dto';
import { Serialize } from 'src/interceptors/serialize-interceptor';
import { UserDto } from './dto/user.dto';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
    constructor(private userService: UsersService) { }
    @Post("/signup")
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body.email, body.password)
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
