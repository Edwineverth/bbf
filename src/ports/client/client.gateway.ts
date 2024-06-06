import { Observable } from 'rxjs';
import { ClientDto } from '../../core/domain/client.dto';

export interface ClientGateway {
  getClients(): Observable<ClientDto[]>;
}
