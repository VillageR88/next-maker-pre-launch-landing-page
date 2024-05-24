import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Image from 'next/image';
import heroSquiggle from '@/public/assets/images/bg-hero-squiggle.svg';

const manrope = Manrope({
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'Contact form',
  description: 'Contact form',
  applicationName: 'Contact form',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${manrope.variable} flex min-h-dvh flex-col items-center justify-start bg-[#080C20] pt-[81px] font-manrope sm:min-h-screen`}
      >
        <div className="absolute top-0 -z-10 mt-[213px] h-[378px] w-[544px]">
          <Image fill src={heroSquiggle as string} alt="background" priority />
        </div>
        {children}
      </body>
    </html>
  );
}
