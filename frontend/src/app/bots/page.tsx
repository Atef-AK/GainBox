'use client';

import { useState } from 'react';
import apiClient from '@/lib/api/client';

export default function BotsPage() {
  const [bots, setBots] = useState<any[]>([]);

  const fetchBots = async () => {
    try {
      const response = await apiClient.get('/bots');
      setBots(response.data);
    } catch (error) {
      console.error('Failed to fetch bots:', error);
    }
  };

  return (
    <div>
      <h1>Trading Bots</h1>
      <button onClick={fetchBots}>Load Bots</button>
      <ul>
        {bots.map((bot, index) => (
          <li key={index}>{bot.name}</li>
        ))}
      </ul>
    </div>
  );
}