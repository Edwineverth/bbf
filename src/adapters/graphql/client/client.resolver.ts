import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientPortfolioType } from '../types/client-portfolio.type';
import { ClientUseCaseInterface } from '../../../ports/use-case/client.usecase';
import { Inject } from '@nestjs/common';
import { ClientType } from '../types/client.type';
import { ClientInputType } from '../types/client-input.type';

@Resolver()
export class ClientResolver {
  constructor(
    @Inject('ClientUseCaseInterface')
    private readonly clientPortfoliosUseCase: ClientUseCaseInterface,
  ) {}

  @Query(() => [ClientPortfolioType])
  getClientsPortfolios() {
    return this.clientPortfoliosUseCase.getClientsPortfoliosUseCase();
  }

  @Query(() => ClientPortfolioType)
  getClientAndPortfolioById(@Args('clientId') clientId: string) {
    return this.clientPortfoliosUseCase.getClientAndPortfolioByIdUseCase(
      clientId,
    );
  }

  @Query(() => ClientType)
  getClientById(@Args('clientId', { type: () => String }) clientId: string) {
    return this.clientPortfoliosUseCase.getClientByIdUseCase(clientId);
  }

  @Mutation(() => ClientType)
  updateClient(
    @Args('clientId', { type: () => String }) clientId: string,
    @Args('client', { type: () => ClientInputType }) client: ClientType,
  ) {
    return this.clientPortfoliosUseCase.updateClientUseCase(clientId, client);
  }

  @Mutation(() => String)
  deleteClient(@Args('clientId', { type: () => String }) clientId: string) {
    return this.clientPortfoliosUseCase.deleteClientUseCase(clientId);
  }

  @Mutation(() => String)
  deleteClientAndPortfolioByIdUseCase(
    @Args('clientId', { type: () => String }) clientId: string,
  ) {
    return this.clientPortfoliosUseCase.deleteClientAndPortfolioByIdUseCase(
      clientId,
    );
  }
}
