import { Inject, Injectable } from '@nestjs/common';
import { ClientGateway } from '../../ports/client/client.gateway';
import { ClientPortfolioGateway } from '../../ports/client-portfolio/client-portfolio.gateway';
import { map, Observable, switchMap } from 'rxjs';
import { ClientPortfolioType } from '../../adapters/graphql/types/client-portfolio.type';
import { ClientUseCaseInterface } from '../../ports/use-case/client.usecase';
import { ClientDto } from '../domain/client.dto';
import { ClientType } from '../../adapters/graphql/types/client.type';

@Injectable()
export class ClientUseCase implements ClientUseCaseInterface {
  constructor(
    @Inject('ClientGateway')
    private readonly clientGateway: ClientGateway,
    @Inject('ClientPortfolioGateway')
    private readonly portfolioGateway: ClientPortfolioGateway,
  ) {}

  getClientsPortfoliosUseCase(): Observable<ClientPortfolioType[]> {
    return this.clientGateway.getClients().pipe(
      switchMap((clients) =>
        this.portfolioGateway.getPortfolios().pipe(
          map((portfolios) =>
            clients.map((client) => ({
              client: client,
              portfolios: portfolios.filter(
                (portfolio) => portfolio.customerCode === client.clientId,
              ),
            })),
          ),
        ),
      ),
    );
  }

  getClientAndPortfolioByIdUseCase(
    clientId: string,
  ): Observable<ClientPortfolioType> {
    return this.clientGateway.getClientById(clientId).pipe(
      switchMap((client) =>
        this.portfolioGateway.getPortfolios().pipe(
          map((portfolios) => ({
            client: client,
            portfolios: portfolios.filter(
              (portfolio) => portfolio.customerCode === client.clientId,
            ),
          })),
        ),
      ),
    );
  }

  deleteClientAndPortfolioByIdUseCase(clientId: string): Observable<string> {
    return this.clientGateway
      .deleteClient(clientId)
      .pipe(switchMap(() => this.portfolioGateway.deletePortfolio(clientId)));
  }

  getClientByIdUseCase(clientId: string): Observable<ClientType> {
    return this.clientGateway
      .getClientById(clientId)
      .pipe(map((client) => client));
  }

  updateClientUseCase(
    clientId: string,
    client: ClientDto,
  ): Observable<ClientDto> {
    return this.clientGateway
      .updateClient(clientId, client)
      .pipe(map((client) => client));
  }

  deleteClientUseCase(clientId: string): Observable<string> {
    return this.clientGateway
      .deleteClient(clientId)
      .pipe(map((response) => response));
  }
}
