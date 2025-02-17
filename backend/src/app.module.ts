import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TradingService } from './trading/trading.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, TradingService],
})
export class AppModule {}
