import { Module } from '@nestjs/common';
import { ClientUseCase } from './use-case/client.use-case';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { PortfolioUseCase } from './use-case/portfolio.use-case';

@Module({
  imports: [InfrastructureModule],
  providers: [
    {
      provide: 'ClientUseCaseInterface',
      useClass: ClientUseCase,
    },
    {
      provide: 'PortfolioUseCaseInterface',
      useClass: PortfolioUseCase,
    },
  ],
  exports: ['ClientUseCaseInterface', 'PortfolioUseCaseInterface'],
})
export class CoreModule {}
