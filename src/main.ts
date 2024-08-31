import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfig } from 'src/config/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const logger = app['logger'];
  const appConfig = configService.get<AppConfig>('appConfig');

  if (appConfig.apiDocumentation) {
    const config = new DocumentBuilder()
      .setTitle('Emurgo Home Task')
      .setVersion('0.0.1')
      .build();

    const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        filter: true,
        docExpansion: 'none',
      },
    };

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, customOptions);
  }

  await app.listen(appConfig.apiPort);
  logger.log(`Started listening for HTTP traffic on port ${appConfig.apiPort}`);
}

bootstrap();
