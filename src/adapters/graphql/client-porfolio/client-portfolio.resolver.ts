import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PortfolioUseCaseInterface } from '../../../ports/use-case/portfolio.usecase';
import { Inject } from '@nestjs/common';
import { PortfolioType } from '../types/portfolio.type';

@Resolver()
export class ClientPortfolioResolver {
  constructor(
    @Inject('PortfolioUseCaseInterface')
    private readonly clientPortfolioUseCase: PortfolioUseCaseInterface,
  ) {}

  @Query(() => [PortfolioType])
  getPortfolios() {
    return this.clientPortfolioUseCase.getPortfoliosUseCase();
  }

  @Query(() => PortfolioType)
  getPortfolioById(@Args('route') portfolioId: string) {
    return this.clientPortfolioUseCase.getPortfolioByIdUseCase(portfolioId);
  }

  @Mutation(() => PortfolioType)
  createPortfolio(@Args('portfolio') portfolio: PortfolioType) {
    return this.clientPortfolioUseCase.createPortfolioUseCase(portfolio);
  }

  @Mutation(() => PortfolioType)
  updatePortfolio(
    @Args('route', { type: () => String }) portfolioId: string,
    @Args('portfolio') portfolio: PortfolioType,
  ) {
    return this.clientPortfolioUseCase.updatePortfolioUseCase(
      portfolioId,
      portfolio,
    );
  }

  @Mutation(() => String)
  deletePortfolio(@Args('route', { type: () => String }) portfolioId: string) {
    return this.clientPortfolioUseCase.deletePortfolioUseCase(portfolioId);
  }
}
