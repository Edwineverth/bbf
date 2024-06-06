import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [CoreModule, GraphqlModule],
  providers: [],
  exports: [],
})
export class AdaptersModule {}
