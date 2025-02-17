import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BotsService } from './bots.service';

@Controller('bots')
export class BotsController {
  constructor(private readonly botsService: BotsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getBots() {
    return this.botsService.getBots();
  }

  @Post('grid')
  @UseGuards(AuthGuard('jwt'))
  startGridBot(
    @Body('symbol') symbol: string,
    @Body('lowerPrice') lowerPrice: number,
    @Body('upperPrice') upperPrice: number,
    @Body('gridLevels') gridLevels: number,
  ) {
    return this.botsService.startGridBot(symbol, lowerPrice, upperPrice, gridLevels);
  }
}