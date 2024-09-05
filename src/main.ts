import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(new ZodFilter());

  app.enableCors({
    origin: true,
    methods: 'GET, PUT, PATCH, POST, DELETE, HEAD, OPTIONS',
    credentials: true,
  });

  // const configService = app.get<ConfigService<Env, true>>(ConfigService);
  // const port = configService.get('PORT', { infer: true });

  // const document = SwaggerModule.createDocument(app, documentBuilderConfig);
  // SwaggerModule.setup('/api-docs', app, document);

  // await app.listen(port);

  await app.listen(3333);
}
bootstrap();
