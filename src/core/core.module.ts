import { Module } from '@nestjs/common';
import { ClientUseCase } from './use-case/client.use-case';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [
    {
      provide: 'ClientUseCaseInterface',
      useClass: ClientUseCase,
    },
  ],
  exports: ['ClientUseCaseInterface'],
})
export class CoreModule {}
