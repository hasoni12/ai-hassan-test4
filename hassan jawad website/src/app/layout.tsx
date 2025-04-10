import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const tajawal = Tajawal({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['arabic'],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: 'حسن جواد | منصة ذكية لمهندس المستقبل',
  description: 'موقع تعليمي شامل يساعد الطلاب والخريجين الجدد على بناء مستقبلهم المهني في مجالات الهندسة والتقنية',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${tajawal.variable} font-tajawal`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
