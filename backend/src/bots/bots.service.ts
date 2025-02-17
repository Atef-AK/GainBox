import { Injectable } from '@nestjs/common';
import ccxt from 'ccxt';

@Injectable()
export class BotsService {
  private exchange: ccxt.Exchange;

  constructor() {
    this.exchange = new ccxt.binance({
      apiKey: 'YOUR_API_KEY',
      secret: 'YOUR_API_SECRET',
    });
  }

  async startGridBot(symbol: string, lowerPrice: number, upperPrice: number, gridLevels: number) {
    const gridSize = (upperPrice - lowerPrice) / gridLevels;
    const ticker = await this.exchange.fetchTicker(symbol);
    const currentPrice = ticker.last;

    for (let i = 0; i < gridLevels; i++) {
      const price = lowerPrice + i * gridSize;
      if (currentPrice > price) {
        await this.exchange.createOrder(symbol, 'limit', 'buy', 0.001, price);
      } else {
        await this.exchange.createOrder(symbol, 'limit', 'sell', 0.001, price);
      }
    }
  }
}