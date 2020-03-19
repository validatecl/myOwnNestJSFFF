import { Controller, Get } from '@nestjs/common';

@Controller('egg')
export class EggController {
    @Get()
    findAll(): any {
      return 'Some eggs 🥚🥚🥚🥚';
    }
}
