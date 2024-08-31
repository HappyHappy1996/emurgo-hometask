import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

import { NewsController } from '././news.controller';
import { NewsService } from './news.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10_000, // milliseconds
      max: 10, // maximum number of items in cache
    }),
  ],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
