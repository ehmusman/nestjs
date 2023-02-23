import { Controller, Get } from "@nestjs/common";


@Controller("/app")
class AppController {
    @Get("/req")
    getRootRoute() {
        return "Hi There!"
    }
    @Get("/res")
    getByeThere(){
        return "Bye There"
    }
}

export default AppController