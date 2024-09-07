import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { documentBuilderConfig } from './infra/docs/documentBuilder';
import { Env } from './infra/config/types';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { Config } from './core/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useLogger(app.get(Logger));

  app.enableCors({
    origin: true,
    methods: 'GET, PUT, PATCH, POST, DELETE, HEAD, OPTIONS',
    credentials: true,
  });

  const configService = app.get<Config<Env>>(Config);
  const port = configService.get('PORT');

  const document = SwaggerModule.createDocument(app, documentBuilderConfig);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(port);
}
bootstrap();
