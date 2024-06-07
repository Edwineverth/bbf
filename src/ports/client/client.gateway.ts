import { Observable } from 'rxjs';
import { ClientDto } from '../../core/domain/client.dto';

export interface ClientGateway {
  getClients(): Observable<ClientDto[]>;
  getClientById(clientId: string): Observable<ClientDto>;
  updateClient(clientId: string, client: ClientDto): Observable<ClientDto>;
  deleteClient(clientId: string): Observable<string>;
}
