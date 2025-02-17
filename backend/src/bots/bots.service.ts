import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as ccxt from 'ccxt';

@Injectable()
export class BotsService {
  private exchange: ccxt.Exchange;

  constructor(private readonly configService: ConfigService) {
    this.exchange = new ccxt.binance({
      apiKey: this.configService.get<string>('BINANCE_API_KEY'),
      secret: this.configService.get<string>('BINANCE_API_SECRET'),
    });
  }

  getBots() {
    // Replace with actual bot data
    return [
      { name: 'Grid Bot', status: 'Active' },
      { name: 'DCA Bot', status: 'Inactive' },
    ];
  }

  async startGridBot(symbol: string, lowerPrice: number, upperPrice: number, gridLevels: number) {
    const gridSize = (upperPrice - lowerPrice) / gridLevels;
    const ticker = await this.exchange.fetchTicker(symbol);
    const currentPrice = ticker.last;

    if (currentPrice === undefined) {
      throw new Error('Failed to fetch current price for the symbol.');
    }

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