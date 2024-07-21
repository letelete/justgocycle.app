import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { DebugTailwindIndicator } from '~ui:components/atoms/debug';

import '~ui:styles/globals.css';

import { cn } from '~ui:styles/index';

const fontSans = Nunito({
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
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'no-tap-highlight-mobile min-h-screen scroll-smooth bg-body font-sans text-body-foreground',
          fontSans.variable
        )}
      >
        <aside className='sticky left-0 top-0 w-full bg-destructive/80 px-8 py-4 backdrop-blur-sm'>
          <p className='text-center text-destructive-foreground'>
            <strong>
              {
                "No need to worry — this is just a temporary design. Once I finish the API, I'll perfect it."
              }
            </strong>
            <br />
            Have a great day! 😊
          </p>
        </aside>
        {children}

        <DebugTailwindIndicator />
      </body>
    </html>
  );
}
