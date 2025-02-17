import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
          <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link href="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
          <Link href="/portfolio" style={{ marginRight: '10px' }}>Portfolio</Link>
          <Link href="/bots">Trading Bots</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}