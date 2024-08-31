import { Controller, Get, Query } from '@nestjs/common';

import { NewsService } from './news.service';

@Controller('/news')
export class NewsController {
  constructor(private readonly service: NewsService) {}

  @Get('search')
  async search(@Query('keyword') keyword: string) {
    await this.service.search({
      keyword,
    });
  }
}
