import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import 'video.js/dist/video-js.css';
//import 'codemirror/lib/codemirror.css';

export const metadata = {
  title: 'Coding web',
  description: 'Code and practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={''}>{children}</body>
    </html>
  );
}
