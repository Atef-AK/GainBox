import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TradingService } from './trading/trading.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BotsModule } from './bots/bots.module';
import { WebsocketGateway } from './websocket/websocket.gateway';
@Module({
  imports: [AuthModule, PortfolioModule, BotsModule],
  controllers: [AppController],
  providers: [AppService, TradingService, WebsocketGateway],
})
export class AppModule {}
