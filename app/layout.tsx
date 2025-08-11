import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/lib/providers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Beyond UI - Blog',
  description: 'Discover the latest insights on UI/UX design, SaaS solutions, and digital experiences from Beyond UI experts.',
  keywords: ['UI design', 'UX design', 'SaaS', 'digital experiences', 'blog'],
  authors: [{ name: 'Beyond UI Team' }],
  openGraph: {
    title: 'Beyond UI - Blog',
    description: 'Discover the latest insights on UI/UX design, SaaS solutions, and digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond UI - Blog',
    description: 'Discover the latest insights on UI/UX design, SaaS solutions, and digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}