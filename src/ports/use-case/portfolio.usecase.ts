import { Observable } from 'rxjs';
import { PortfolioDto } from '../../core/domain/portfolio.dto';

export interface PortfolioUseCaseInterface {
  getPortfoliosUseCase(): Observable<PortfolioDto[]>;
  getPortfolioByIdUseCase(id: string): Observable<PortfolioDto>;
  updatePortfolioUseCase(
    id: string,
    portfolio: PortfolioDto,
  ): Observable<PortfolioDto>;
  deletePortfolioUseCase(id: string): Observable<string>;
  createPortfolioUseCase(portfolio: PortfolioDto): Observable<PortfolioDto>;
}
