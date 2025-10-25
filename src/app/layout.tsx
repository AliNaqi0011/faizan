import type {Metadata} from 'next';
import {Toaster} from "@/components/ui/toaster";
import './globals.css';

const appName = "Laraib Fatima's Portfolio";
const appDescription = "Ambitious and detail-oriented final-year Software Engineering student with hands-on experience in full-stack development, AI/ML applications, and scalable web solutions.";

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: appName,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: appName,
    description: appDescription,
    url: 'https://laraib-awan-portfolio.com', // Replace with actual URL
    siteName: appName,
    images: [
      {
        url: 'https://laraib-awan-portfolio.com/og-image.png', // Replace with actual image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: appName,
    description: appDescription,
    images: ['https://laraib-awan-portfolio.com/og-image.png'], // Replace with actual image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: appName,
    url: 'https://laraib-awan-portfolio.com', // Replace with actual URL
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
