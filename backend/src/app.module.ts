import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TradingService } from './trading/trading.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BotsModule } from './bots/bots.module';

@Module({
  imports: [AuthModule, PortfolioModule, BotsModule],
  controllers: [AppController],
  providers: [AppService, TradingService],
})
export class AppModule {}
