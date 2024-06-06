import { Module } from '@nestjs/common';
import { ApiHttpModule } from './http/http.module';

@Module({
  imports: [ApiHttpModule],
  exports: [ApiHttpModule],
})
export class InfrastructureModule {}
