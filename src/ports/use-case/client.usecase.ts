import { Observable } from 'rxjs';
import { ClientPortfolioType } from '../../adapters/graphql/types/client-portfolio.type';
import { ClientType } from '../../adapters/graphql/types/client.type';
import { ClientDto } from '../../core/domain/client.dto';

export interface ClientUseCaseInterface {
  getClientsPortfoliosUseCase(): Observable<ClientPortfolioType[]>;
  getClientAndPortfolioByIdUseCase(
    clientId: string,
  ): Observable<ClientPortfolioType>;
  getClientByIdUseCase(clientId: string): Observable<ClientType>;
  updateClientUseCase(
    clientId: string,
    client: ClientDto,
  ): Observable<ClientDto>;
  deleteClientUseCase(clientId: string): Observable<string>;
  deleteClientAndPortfolioByIdUseCase(clientId: string): Observable<string>;
}
