import { Controller, Get } from "@nestjs/common";

@Controller('/app') // controller decorator
export class AppController {
    @Get('/message')
    getRootRoute() {
        return 'Hi there';
    }
}
