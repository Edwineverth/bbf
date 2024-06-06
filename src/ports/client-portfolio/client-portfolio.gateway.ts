import { Observable } from 'rxjs';
import { PortfolioDto } from '../../core/domain/portfolio.dto';

export interface ClientPortfolioGateway {
  getPortfolios(): Observable<PortfolioDto[]>;
}
