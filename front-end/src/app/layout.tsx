import type { Metadata } from 'next';
import { Nunito_Sans, Quicksand } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Pixibli',
  description: 'Ghibli-style AI photo transformation web app',
};

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});
const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${nunitoSans.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
