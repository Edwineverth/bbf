import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdaptersModule } from './adapters/adapters.module';

@Module({
  imports: [ConfigModule.forRoot(), AdaptersModule],
  providers: [],
  exports: [],
})
export class AppModule {}
