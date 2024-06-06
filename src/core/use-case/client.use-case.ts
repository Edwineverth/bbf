import { Inject, Injectable } from '@nestjs/common';
import { ClientGateway } from '../../ports/client/client.gateway';
import { ClientPortfolioGateway } from '../../ports/client-portfolio/client-portfolio.gateway';
import { map, Observable, switchMap } from 'rxjs';
import { ClientPortfolioType } from '../../adapters/graphql/types/client-portfolio.type';
import { ClientUseCaseInterface } from '../../ports/use-case/client.usecase';

@Injectable()
export class ClientUseCase implements ClientUseCaseInterface {
  constructor(
    @Inject('ClientGateway')
    private readonly clientGateway: ClientGateway,
    @Inject('ClientPortfolioGateway')
    private readonly portfolioGateway: ClientPortfolioGateway,
  ) {}

  getClientPortfoliosUseCase(): Observable<ClientPortfolioType[]> {
    return this.clientGateway.getClients().pipe(
      switchMap((clients) =>
        this.portfolioGateway.getPortfolios().pipe(
          map((portfolios) =>
            clients.map((client) => ({
              client: client,
              portfolios: portfolios.filter(
                (portfolio) => portfolio.clientId === client.clientId,
              ),
            })),
          ),
        ),
      ),
    );
  }
}
