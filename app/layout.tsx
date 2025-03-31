import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CHZ-Dienstverlening',
  description: 'Uw betrouwbare partner voor professionele spoorwegbewaking',
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://souhailned.github.io/sb1-bu2alq5e'
      : 'http://localhost:3000'
  ),
  keywords: 'spoorwegveiligheid, veiligheidswacht, spoorwegbewaking, onderhoudswerkzaamheden, CHZ-dienstverlening, Charafi Dienstverlening',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}