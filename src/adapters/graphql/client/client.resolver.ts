import { Query, Resolver } from '@nestjs/graphql';
import { ClientPortfolioType } from '../types/client-portfolio.type';
import { ClientUseCaseInterface } from '../../../ports/use-case/client.usecase';
import { Inject } from '@nestjs/common';

@Resolver()
export class ClientResolver {
  constructor(
    @Inject('ClientUseCaseInterface')
    private readonly clientPortfoliosUseCase: ClientUseCaseInterface,
  ) {}

  @Query(() => [ClientPortfolioType])
  getClientPortfolios() {
    return this.clientPortfoliosUseCase.getClientPortfoliosUseCase();
  }
}
