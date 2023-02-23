import { Controller , Get, Post, Param, Body} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return "d"
    }
    @Post()
    createMessage(@Body() body: any) {
        console.log(body)
        return "d"
    }
    @Get("/:id")
    getMessage(@Param() id: string) {
        console.log(id)
        return "d"
    }
}
