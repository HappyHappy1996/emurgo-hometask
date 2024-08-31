import { Injectable, Logger } from '@nestjs/common';

import { SearchDto } from './news.dto';

@Injectable()
export class NewsService {
  private readonly logger: Logger = new Logger(NewsService.name);

  async search(dto: SearchDto): Promise<void> {
    return null;
  }
}
