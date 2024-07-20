import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import '~ui:styles/globals.css';
import { cn } from '~ui:styles/index';

const fontSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'JustGoCycle',
  description: 'Stop wasting time on planning your next trip. Just go cycle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(`${fontSans.variable}`)}>{children}</body>
    </html>
  );
}
