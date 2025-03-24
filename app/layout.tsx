import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CHZ-dienstverlening | Specialist in Spoorwegbewaking',
  description: 'Charafi Dienstverlening: Professionele spoorwegveiligheidswacht voor bewaking tijdens onderhoudswerkzaamheden. Specialist in het waarborgen van veiligheid op en rond het spoor.',
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