import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import ClientConfig from '../config/client.config';
import { ClientService } from './client/client.service';
import { ClientPortfolioService } from './client-portfolio/client-portfolio.service';

@Module({
  imports: [HttpModule, ConfigModule.forFeature(ClientConfig)],
  providers: [
    {
      provide: 'ClientGateway',
      useClass: ClientService,
    },
    {
      provide: 'ClientPortfolioGateway',
      useClass: ClientPortfolioService,
    },
  ],
  exports: ['ClientGateway', 'ClientPortfolioGateway'],
})
export class ApiHttpModule {}
