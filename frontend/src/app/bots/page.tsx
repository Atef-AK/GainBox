'use client';

import { useState } from 'react';
import apiClient from '@/lib/api/client';

export default function BotsPage() {
  const [bots, setBots] = useState<any[]>([]);
  const [symbol, setSymbol] = useState('BTC/USDT');
  const [lowerPrice, setLowerPrice] = useState(0);
  const [upperPrice, setUpperPrice] = useState(0);
  const [gridLevels, setGridLevels] = useState(0);

  const startGridBot = async () => {
    try {
      await apiClient.post('/bots/grid', { symbol, lowerPrice, upperPrice, gridLevels });
      alert('Grid bot started successfully!');
    } catch (error) {
      console.error('Failed to start grid bot:', error);
    }
  };

  return (
    <div>
      <h1>Trading Bots</h1>
      <div>
        <h2>Grid Trading Bot</h2>
        <input
          type="text"
          placeholder="Symbol (e.g., BTC/USDT)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          type="number"
          placeholder="Lower Price"
          value={lowerPrice}
          onChange={(e) => setLowerPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Upper Price"
          value={upperPrice}
          onChange={(e) => setUpperPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Grid Levels"
          value={gridLevels}
          onChange={(e) => setGridLevels(Number(e.target.value))}
        />
        <button onClick={startGridBot}>Start Grid Bot</button>
      </div>
    </div>
  );
}