import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NewsModule } from './modules/news/news.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
      ],
    }),
    NewsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
