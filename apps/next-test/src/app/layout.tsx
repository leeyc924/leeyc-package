import type { Metadata } from 'next';
import '@breadlee/ui/dist/css/index.css';
import { ThemeProvider } from '@breadlee/ui';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/@breadlee/icons/dist/icons.css" rel="stylesheet" />
        <link
          as="font"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/@breadlee/icons/dist/icons.woff"
          rel="preload"
          type="font/woff"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
