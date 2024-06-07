import { Inject, Injectable } from '@nestjs/common';
import { ClientPortfolioGateway } from '../../ports/client-portfolio/client-portfolio.gateway';
import { map, Observable, switchMap } from 'rxjs';
import { PortfolioDto } from '../domain/portfolio.dto';
import { PortfolioUseCaseInterface } from '../../ports/use-case/portfolio.usecase';

@Injectable()
export class PortfolioUseCase implements PortfolioUseCaseInterface {
  constructor(
    @Inject('ClientPortfolioGateway')
    private readonly portfolioGateway: ClientPortfolioGateway,
  ) {}

  getPortfoliosUseCase(): Observable<PortfolioDto[]> {
    return this.portfolioGateway
      .getPortfolios()
      .pipe(map((portfolios) => portfolios));
  }

  getPortfolioByIdUseCase(id: string): Observable<PortfolioDto> {
    return this.portfolioGateway
      .getPortfolioById(id)
      .pipe(map((portfolio) => portfolio));
  }

  createPortfolioUseCase(portfolio: PortfolioDto): Observable<PortfolioDto> {
    return this.portfolioGateway
      .createPortfolio(portfolio)
      .pipe(
        switchMap(() =>
          this.portfolioGateway.getPortfolioById(portfolio.route),
        ),
      );
  }

  updatePortfolioUseCase(
    id: string,
    portfolio: PortfolioDto,
  ): Observable<PortfolioDto> {
    return this.portfolioGateway
      .updatePortfolio(id, portfolio)
      .pipe(switchMap(() => this.portfolioGateway.getPortfolioById(id)));
  }

  deletePortfolioUseCase(id: string): Observable<string> {
    return this.portfolioGateway
      .deletePortfolio(id)
      .pipe(map(() => `Portfolio with id ${id} has been deleted successfully`));
  }
}
