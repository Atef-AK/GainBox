'use client';

import { useEffect, useState } from 'react';
import apiClient from '@/lib/api/client';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiClient.get('/auth/me');
        setUser(response.data);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };
    fetchUser();
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        {user && (
          <div>
            <p>Welcome, {user.name}!</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}