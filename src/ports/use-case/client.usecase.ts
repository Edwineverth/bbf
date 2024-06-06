import { Observable } from 'rxjs';
import { ClientPortfolioType } from '../../adapters/graphql/types/client-portfolio.type';

export interface ClientUseCaseInterface {
  getClientPortfoliosUseCase(): Observable<ClientPortfolioType[]>;
}
