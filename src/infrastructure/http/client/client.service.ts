import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import ClientConfig from '../../../infrastructure/config/client.config';
import { ConfigType } from '@nestjs/config';
import { ClientGateway } from '../../../ports/client/client.gateway';
import { map, Observable } from 'rxjs';
import { ClientDto } from '../../../core/domain/client.dto';
@Injectable()
export class ClientService implements ClientGateway {
  private clientApiUrl: string;
  constructor(
    private readonly httpService: HttpService,
    @Inject(ClientConfig.KEY)
    private configHttp: ConfigType<typeof ClientConfig>,
  ) {
    this.clientApiUrl = this.configHttp.clientApiUrl;
  }

  getClients(): Observable<ClientDto[]> {
    return this.httpService
      .get<ClientDto[]>(this.clientApiUrl)
      .pipe(map((response) => response.data));
  }
}
