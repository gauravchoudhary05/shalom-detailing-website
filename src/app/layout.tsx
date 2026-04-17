import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import '@/app/globals.css';

const fontMono = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const fontSans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const fontHeading = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Shalom Car Detailing | Premium PPF, Ceramic Coating & Wraps',
  description: 'Experience our immersive 3D configurator to visualize premium PPF, Ceramic, and Wrap services on your vehicle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. MUST NOT be wrapped in <> or </>
    // 2. MUST contain <html> and <body>
    <html lang="en" className="dark">
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable,
          "bg-black text-white font-sans antialiased overflow-x-hidden",
          "selection:bg-[#E50914] selection:text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}