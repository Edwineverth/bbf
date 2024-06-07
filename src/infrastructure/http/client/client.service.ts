import { Inject, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import ClientConfig from '../../../infrastructure/config/client.config';
import { ConfigType } from '@nestjs/config';
import { ClientGateway } from '../../../ports/client/client.gateway';
import { catchError, map, Observable } from 'rxjs';
import { ClientDto } from '../../../core/domain/client.dto';
import { RedisService } from '../../redis/redis.provider';
@Injectable()
export class ClientService implements ClientGateway {
  private clientApiUrl: string;
  private readonly logger: Logger = new Logger(ClientService.name);
  constructor(
    private readonly httpService: HttpService,
    @Inject(ClientConfig.KEY)
    private configHttp: ConfigType<typeof ClientConfig>,
    private readonly redisService: RedisService,
  ) {
    this.clientApiUrl = `${this.configHttp.clientApiUrl}/clients`;
  }

  getClients(): Observable<ClientDto[]> {
    const cacheKey = 'clients_data';
    this.logger.debug('Attempting to fetch data from Redis');

    return new Observable<ClientDto[]>((observer) => {
      this.redisService
        .get(cacheKey)
        .then((cachedData) => {
          if (cachedData) {
            this.logger.debug('Returning cached client data');
            observer.next(JSON.parse(cachedData));
            observer.complete();
          } else {
            this.logger.debug(
              `Fetching client data from API: ${this.clientApiUrl}`,
            );
            this.httpService
              .get<ClientDto[]>(this.clientApiUrl)
              .pipe(
                map((response) => response.data),
                catchError((error) => {
                  this.logger.error(`Error fetching clients: ${error.message}`);
                  throw error;
                }),
              )
              .subscribe((data) => {
                this.logger.debug('Storing data in Redis cache');
                this.redisService
                  .set(cacheKey, JSON.stringify(data))
                  .then(() => {
                    this.logger.debug('Data cached successfully');
                    observer.next(data);
                    observer.complete();
                  })
                  .catch((error) => {
                    this.logger.error(`Error caching data: ${error.message}`);
                    observer.error(error);
                  });
              });
          }
        })
        .catch((error) => {
          this.logger.error(`Error with Redis: ${error.message}`);
          observer.error(error);
        });
    });
  }

  getClientById(clientId: string): Observable<ClientDto> {
    return this.httpService
      .get<ClientDto>(`${this.clientApiUrl}/${clientId}`)
      .pipe(map((response) => response.data));
  }

  createClient(client: ClientDto): Observable<ClientDto> {
    return this.httpService
      .post<ClientDto>(this.clientApiUrl, client)
      .pipe(map((response) => response.data));
  }

  updateClient(clientId: string, client: ClientDto): Observable<ClientDto> {
    return this.httpService
      .put<ClientDto>(`${this.clientApiUrl}/${clientId}`, client)
      .pipe(map((response) => response.data));
  }

  deleteClient(clientId: string): Observable<string> {
    return this.httpService
      .delete<string>(`${this.clientApiUrl}/${clientId}`)
      .pipe(map((response) => response.data));
  }
}
