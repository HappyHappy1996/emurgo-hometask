import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import * as NewsAPI from 'newsapi';

import { appConfig } from './../../config';
import { GetArticlesQueryDto, SearchDto } from './news.dto';
import { Article } from './article.entity';

@Injectable()
export class NewsService {
  private readonly logger: Logger = new Logger(NewsService.name);
  private readonly client: NewsAPI;

  constructor(
    @Inject(appConfig.KEY)
    private config: ConfigType<typeof appConfig>,
  ) {
    this.client = new NewsAPI(config.apiKey);
  }

  async getBatch(dto: GetArticlesQueryDto): Promise<Article[]> {
    const batch = await this.client.v2.topHeadlines({
      category: 'general',
      language: 'en',
      page: dto.page,
      pageSize: dto.pageSize,
    });
    return batch.articles;
  }

  async searchTop(dto: SearchDto): Promise<Article[]> {
    const { articles } = await this.client.v2.topHeadlines({
      language: 'en',
      q: dto.keyword,
    });
    return articles;
  }

  async searchEverything(dto: SearchDto): Promise<Article[]> {
    const { articles } = await this.client.v2.everything({
      language: 'en',
      q: dto.keyword,
    });
    return articles;
  }
}
