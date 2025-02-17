import { Injectable } from '@nestjs/common';

@Injectable()
export class BotsService {
  getBots() {
    // Replace with actual bot data
    return [
      { name: 'Grid Bot', status: 'Active' },
      { name: 'DCA Bot', status: 'Inactive' },
    ];
  }
}