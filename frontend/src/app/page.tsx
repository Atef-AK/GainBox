'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to GainBox</h1>
      <p>Trade Smarter, Gain Faster</p>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => router.push('/auth/login')}
          style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Login
        </button>
        <button
          onClick={() => router.push('/auth/signup')}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}