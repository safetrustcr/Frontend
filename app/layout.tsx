'use client';
import React from 'react';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@material-tailwind/react';
import { ThemeProvider as CustomThemeProvider } from '@/providers/ThemeProvider';
import '../src/i18n/config';
import themeScript from '@/utils/themeScript';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript
          }}
        />
      </head>
      <body className="antialiased font-inter" suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <ThemeProvider>
            <CustomThemeProvider>
              <main className="flex-1">{children}</main>
            </CustomThemeProvider>
          </ThemeProvider>
        </div>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
