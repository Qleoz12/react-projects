import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Res,
  Req,
} from '@nestjs/common';
import { TcpcLoginUsersService } from './tcpc-login-users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from './auth/auth.guard';
import { Response } from 'express';

@Controller('tcpc-login-users')
export class TcpcLoginUsersController {
  constructor(private readonly service: TcpcLoginUsersService) {}

  @Post('login')
  async login(
    @Body() dto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.service.login(dto, res);
  }

  @Get('logout')
  signout(@Req() req, @Res() res) {
    return this.service.signout(req, res);
  }
  // @Roles(TypesRoles.ADMIN, TypesRoles.USER)
  //@UseGuards(JwtAuthGuard, RolesGuard)
  @Get('user')
  async user(@Res({ passthrough: true }) res, @Req() req) {
    return await this.service.user(res, req);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
