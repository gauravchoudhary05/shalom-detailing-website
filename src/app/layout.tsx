import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import '@/app/globals.css';
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={cn(spaceGrotesk.variable, inter.variable, 'dark')}>
      <body
        className={cn(
          "bg-black text-white font-inter antialiased overflow-x-hidden",
          "selection:bg-[#E50914] selection:text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}