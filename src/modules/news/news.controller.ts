import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';

import { NewsService } from './news.service';
import { Article } from 'src/modules/news/article.entity';
import { GetArticlesQueryDto } from 'src/modules/news/news.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('news')
@Controller('/news')
export class NewsController {
  constructor(private readonly service: NewsService) {}

  @UseInterceptors(CacheInterceptor)
  @Get('batch')
  async batch(@Query() query: GetArticlesQueryDto): Promise<Article[]> {
    return this.service.getBatch(query);
  }

  @UseInterceptors(CacheInterceptor)
  @Get('search')
  async search(@Query('title') title: string): Promise<Article[]> {
    return this.service.searchTop({
      keyword: title,
    });
  }

  @UseInterceptors(CacheInterceptor)
  @Get('keyword')
  async keyword(@Query('keyword') keyword: string): Promise<Article[]> {
    return this.service.searchEverything({
      keyword,
    });
  }
}
