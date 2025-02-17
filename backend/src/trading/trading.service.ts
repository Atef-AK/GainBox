import { Injectable } from '@nestjs/common';
import ccxt from 'ccxt';

@Injectable()
export class TradingService {
  private exchange: ccxt.Exchange;

  constructor() {
    this.exchange = new ccxt.binance({
      apiKey: 'YOUR_API_KEY',
      secret: 'YOUR_API_SECRET',
    });
  }

  async getBalance() {
    return this.exchange.fetchBalance();
  }
}