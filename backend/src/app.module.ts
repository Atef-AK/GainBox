import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TradingService } from './trading/trading.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BotsModule } from './bots/bots.module';
import { WebsocketGateway } from './websocket/websocket.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the configuration available globally
      envFilePath: '.env', // Specify the path to the .env file
    }),
    AuthModule,
    PortfolioModule,
    BotsModule,
  ],
  controllers: [AppController],
  providers: [AppService, TradingService, WebsocketGateway],
})
export class AppModule {}
