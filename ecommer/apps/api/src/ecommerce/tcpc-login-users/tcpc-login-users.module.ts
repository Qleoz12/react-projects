import { Module } from '@nestjs/common';
import { TcpcLoginUsersService } from './tcpc-login-users.service';
import { TcpcLoginUsersController } from './tcpc-login-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpcLoginUsers } from 'src/feature/tcpc-login-users.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([TcpcLoginUsers]),
    JwtModule.registerAsync({
      useFactory() {
        return {
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: process.env.JWT_TIME,
          },
        };
      },
    }),
  ],
  controllers: [TcpcLoginUsersController],
  providers: [TcpcLoginUsersService],
  exports: [TcpcLoginUsersService],
})
export class TcpcLoginUsersModule {}
