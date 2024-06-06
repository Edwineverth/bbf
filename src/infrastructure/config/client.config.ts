import { registerAs } from '@nestjs/config';
import { EnvNameEnum } from '../enum/env-name.enum';

export default registerAs(EnvNameEnum.HTTP_CONFIG, () => ({
  clientApiUrl: process.env.CLIENT_API_URL,
  portfolioApiUrl: process.env.PORTFOLIO_API_URL,
}));
