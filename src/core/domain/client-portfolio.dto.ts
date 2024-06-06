import { ClientDto } from './client.dto';
import { PortfolioDto } from './portfolio.dto';

export class ClientPortfolio {
  client: ClientDto;
  portfolios: PortfolioDto[];
}
