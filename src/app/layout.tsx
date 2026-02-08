import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Obrazz — AI-стилист и персональный гардероб',
  description:
    'Управляйте гардеробом, создавайте образы и примеряйте одежду с помощью AI. Скачайте приложение Obrazz.',
  keywords: ['гардероб', 'AI стилист', 'мода', 'образы', 'virtual try-on', 'одежда'],
  openGraph: {
    title: 'Obrazz — AI-стилист и персональный гардероб',
    description:
      'Управляйте гардеробом, создавайте образы и примеряйте одежду с помощью AI.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
