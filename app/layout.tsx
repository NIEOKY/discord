import './globals.css';
import type { Metadata } from 'next';

import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '../components/providers/theme-provider';
import { cn } from '@/lib/utils';
import { Open_Sans } from 'next/font/google';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chat app',
  description: 'this is a chat app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            storageKey="discord_theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
