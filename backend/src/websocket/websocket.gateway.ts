import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('updatePortfolio')
  handlePortfolioUpdate(@MessageBody() data: any) {
    this.server.emit('portfolioUpdate', data);
  }

  @SubscribeMessage('updateBots')
  handleBotsUpdate(@MessageBody() data: any) {
    this.server.emit('botsUpdate', data);
  }
}