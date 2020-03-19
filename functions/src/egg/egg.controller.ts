import { Controller, Get } from '@nestjs/common';

@Controller('egg')
export class EggController {
    @Get()
    findAll(): any {
      return {
          statusCode: 200,
          response: true,
          message: 'Some eggs 🥚🥚🥚🥚'
      };
    }
}
