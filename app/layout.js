import { Poppins } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const inter = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Sebastian´s portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Nav />
        {children}
      </body>
    </html>
  );
}
