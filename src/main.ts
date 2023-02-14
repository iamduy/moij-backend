import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.POST || 3001);
  console.log(
    `🚀 🚀 🚀 Server ready and listening at ==> http://localhost:${process.env.POST
    } 🚀 🚀 🚀`,
  );
}
bootstrap();
