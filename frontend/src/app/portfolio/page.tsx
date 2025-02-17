'use client';

import { useEffect, useState } from 'react';
import apiClient from '@/lib/api/client';
import socket from '@/lib/api/socket';

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState<any[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await apiClient.get('/portfolio');
        setPortfolio(response.data);
      } catch (error) {
        console.error('Failed to fetch portfolio:', error);
      }
    };
    fetchPortfolio();

    socket.on('portfolioUpdate', (data) => {
      setPortfolio(data);
    });

    return () => {
      socket.off('portfolioUpdate');
    };
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {portfolio.map((asset, index) => (
          <li key={index}>
            {asset.symbol}: {asset.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}