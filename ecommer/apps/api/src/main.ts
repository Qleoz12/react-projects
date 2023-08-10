import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
  };

  app.enableCors(corsOptions);
  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const logger = new Logger();
  await app.listen(process.env.PORT);
  logger.log(`se esta ejecutando en el puerto ${await app.getUrl()}`);
}
bootstrap();
