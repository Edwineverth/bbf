import { Module } from '@nestjs/common';
import { ClientResolver } from './client/client.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoreModule } from '../../core/core.module';
import { ClientPortfolioResolver } from './client-porfolio/client-portfolio.resolver';
@Module({
  imports: [
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [ClientResolver, ClientPortfolioResolver],
})
export class GraphqlModule {}
