import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Open API Test Example Nest JWT')
    .setDescription('API Test Example Nest JWT')
    .setVersion('1.0')
    .addTag('Example Nest JWT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('openapi', app, document);

  const cors = {
    origin: [
      'http://localhost:3000',
      'http://localhost',
      '*',
    ],
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['*'],
  };

  app.enableCors(cors);

  await app.listen(3000);
}
bootstrap();
