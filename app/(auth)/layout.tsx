import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { dark } from '@clerk/themes';
import { AlertContextProvider } from '@/hooks/alert/Alert';
import '../globals.css';

/** SEO **/
export const metadata = {
  title: 'Threads',
  description: ' A Next.js 14 Meta Application',
};

/** FONT **/
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html>
        <body className={`${inter.className} bg-dark-1`}>
          <AlertContextProvider>{children}</AlertContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
