import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcpcLoginUsers } from 'src/feature/tcpc-login-users.entity';
import * as crypto from 'crypto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class TcpcLoginUsersService {
  constructor(
    @InjectRepository(TcpcLoginUsers)
    private usersRepository: Repository<TcpcLoginUsers>,
    private jwtService: JwtService,
  ) {}

  findAll() {
    try {
      return this.usersRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async login({ email, password }: LoginUserDto, res: Response) {
    try {
      const hashedPassword = crypto
        .createHash('sha1')
        .update(password)
        .digest('hex');

      const user = await this.usersRepository.findOne({
        where: {
          clue: hashedPassword,
          user: email,
        },
      });
      if (user) {
        const payload = { sub: user.userId };
        const token = await this.jwtService.signAsync(payload);
        res.cookie('token', token, {
          httpOnly: true,
        });
        return {
          statusCode: HttpStatus.OK,
          message: 'Logeado con exito',
          data: user,
          token,
        };
      } else {
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'email o contraseña es incorrecto',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.response?.message,
      };
    }
  }

  async user(res: Response, req: Request) {
    try {
      const token = req.cookies['token'];
      const decodedJwtAccessToken = this.jwtService.decode(token);
      if (decodedJwtAccessToken === null) {
        res.clearCookie('token');
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'Usuario no existe',
        };
      }

      const data = await this.usersRepository.findOneBy({
        userId: decodedJwtAccessToken.sub,
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Usuario logeado con exito',
        data: data,
        token,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.response?.message,
      };
    }
  }

  async signout(req: Request, res: Response) {
    res.clearCookie('token');
    return res.send({ message: 'Cerrado sesión' });
  }
}
