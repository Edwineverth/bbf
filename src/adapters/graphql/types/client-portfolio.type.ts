import { ClientType } from './client.type';
import { Field, ObjectType } from '@nestjs/graphql';
import { PortfolioType } from './portfolio.type';

@ObjectType()
export class ClientPortfolioType {
  @Field(() => ClientType)
  client: ClientType;

  @Field(() => [PortfolioType], { nullable: true })
  portfolios?: PortfolioType[];
}
