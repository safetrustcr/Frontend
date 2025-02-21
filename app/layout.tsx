'use client';
import type React from 'react';
import { useEffect } from 'react';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@material-tailwind/react';
import { ThemeProvider as CustomThemeProvider } from '@/providers/ThemeProvider';
import '../src/i18n/config';
import themeScript from '@/utils/themeScript';
import { ClientProviders } from '@/providers/ClientProviders';
import { switchLanguage } from '@/utils/i18n';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize i18n after mounting
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
      switchLanguage(savedLang);
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body className="antialiased font-inter" suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <ThemeProvider>
            <CustomThemeProvider>
              <ClientProviders>
                <main className="flex-1">{children}</main>
              </ClientProviders>
            </CustomThemeProvider>
          </ThemeProvider>
        </div>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
