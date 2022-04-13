import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function start(): Promise<void> {
  const PORT = process.env.PORT || 5000;

  const app: INestApplication = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      preflightContinue: false,
    },
  });

  const config = new DocumentBuilder()
    .setTitle('POT - Insurance Business Training Application - Back end')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('IBTA')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  app.enableCors();
  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}

start();
