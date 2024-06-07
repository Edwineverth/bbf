import { Inject, Injectable } from '@nestjs/common';
import { ClientGateway } from '../../ports/client/client.gateway';
import { ClientPortfolioGateway } from '../../ports/client-portfolio/client-portfolio.gateway';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
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

  getClients(): Observable<ClientDto[]> {
    return this.clientGateway.getClients().pipe(map((clients) => clients));
  }

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
        this.portfolioGateway.getPortfoliosByClientId(clientId).pipe(
          map((portfolios) => ({
            client: client,
            portfolios: portfolios,
          })),
        ),
      ),
    );
  }

  deleteClientAndPortfolioByIdUseCase(clientId: string): Observable<string> {
    return this.clientGateway.deleteClient(clientId).pipe(
      switchMap(() =>
        this.portfolioGateway.deletePortfolioByClientId(clientId),
      ),
      map(
        () =>
          `Client and portfolio with ID ${clientId} have been successfully deleted.`,
      ),
    );
  }

  getClientByIdUseCase(clientId: string): Observable<ClientType> {
    return this.clientGateway
      .getClientById(clientId)
      .pipe(map((client) => client));
  }

  createClientUseCase(client: ClientDto): Observable<ClientDto> {
    return this.clientGateway
      .createClient(client)
      .pipe(switchMap(() => this.clientGateway.getClientById(client.clientId)));
  }

  updateClientUseCase(
    clientId: string,
    client: ClientDto,
  ): Observable<ClientDto> {
    return this.clientGateway
      .updateClient(clientId, client)
      .pipe(switchMap(() => this.clientGateway.getClientById(clientId)));
  }

  deleteClientUseCase(clientId: string): Observable<string> {
    return this.portfolioGateway.getPortfoliosByClientId(clientId).pipe(
      switchMap((portfolios) => {
        if (portfolios.length > 0) {
          return throwError(
            () =>
              new Error(
                'Client has associated portfolios and cannot be deleted',
              ),
          );
        } else {
          return this.clientGateway
            .deleteClient(clientId)
            .pipe(map(() => 'Client deleted successfully'));
        }
      }),
      catchError((err) =>
        throwError(() => new Error(`Failed to delete client: ${err.message}`)),
      ),
    );
  }
}
