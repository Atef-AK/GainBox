import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  getPortfolio() {
    // Replace with actual portfolio data
    return [
      { symbol: 'BTC', amount: 0.5 },
      { symbol: 'ETH', amount: 2 },
    ];
  }
}