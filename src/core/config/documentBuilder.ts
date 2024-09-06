import { DocumentBuilder } from '@nestjs/swagger';

export const documentBuilderConfig = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('API - Brain Agriculture Serasa')
  .setDescription('API - Brain Agriculture Serasa')
  .setVersion('1.0')
  .build();
