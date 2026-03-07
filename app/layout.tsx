import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'KaNaHiRi Portfolio | 医療×Webシステム開発',
  description:
    '医療システム10年の経験を持つフロントエンドエンジニア。クリニック・医療機関向けのWebシステム開発を得意とします。Next.js / TypeScript / React',
  keywords: ['フリーランス', 'フロントエンド', 'Next.js', 'TypeScript', '医療システム', 'クリニック'],
  openGraph: {
    title: 'KaNaHiRi Portfolio | 医療×Webシステム開発',
    description: '医療システム10年の経験を持つフロントエンドエンジニア',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}