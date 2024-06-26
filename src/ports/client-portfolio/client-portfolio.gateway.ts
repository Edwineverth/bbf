import { Observable } from 'rxjs';
import { PortfolioDto } from '../../core/domain/portfolio.dto';

export interface ClientPortfolioGateway {
  getPortfolios(): Observable<PortfolioDto[]>;
  getPortfolioById(id: string): Observable<PortfolioDto>;
  updatePortfolio(
    id: string,
    portfolio: PortfolioDto,
  ): Observable<PortfolioDto>;
  deletePortfolio(id: string): Observable<string>;
  deletePortfolioByClientId(clientId: string): Observable<string>;
  getPortfoliosByClientId(clientId: string): Observable<PortfolioDto[]>;
  createPortfolio(portfolio: PortfolioDto): Observable<PortfolioDto>;
}
