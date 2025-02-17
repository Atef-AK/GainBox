import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as ccxt from 'ccxt';


@Injectable()
export class TradingService {
  private exchange: ccxt.Exchange;

  constructor(private readonly configService: ConfigService) {
    this.exchange = new ccxt.binance({
      apiKey: this.configService.get<string>('BINANCE_API_KEY'),
      secret: this.configService.get<string>('BINANCE_API_SECRET'),
    });
  }

  async getBalance() {
    return this.exchange.fetchBalance();
  }
}