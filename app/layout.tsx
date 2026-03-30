import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import ConvexClerkProvider from '@/providers/ConvexClerkProvider';
import { Toaster } from '@/components/ui/sonner';
import AudioProvider from '@/providers/AudioProvider';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Podcastr',
  description: 'Generate your podcasts using AI',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang='en'>
        <AudioProvider>
          <body className={`${manrope.className}`}>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
