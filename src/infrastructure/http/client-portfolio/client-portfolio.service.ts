import { Inject, Injectable } from '@nestjs/common';
import ClientConfig from '../../config/client.config';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { PortfolioDto } from '../../../core/domain/portfolio.dto';
import { ClientPortfolioGateway } from '../../../ports/client-portfolio/client-portfolio.gateway';

@Injectable()
export class ClientPortfolioService implements ClientPortfolioGateway {
  private clientPortfolioApiUrl: string;
  constructor(
    @Inject(ClientConfig.KEY)
    private configHttp: ConfigType<typeof ClientConfig>,
    private readonly httpService: HttpService,
  ) {
    this.clientPortfolioApiUrl = this.configHttp.portfolioApiUrl;
  }

  getPortfolios(): Observable<PortfolioDto[]> {
    return this.httpService
      .get<PortfolioDto[]>(this.clientPortfolioApiUrl)
      .pipe(map((response) => response.data));
  }
}
