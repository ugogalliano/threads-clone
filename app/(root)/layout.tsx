import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/shared/Navbar';
import RightSidebar from '@/components/shared/right-side-bar/RightSidebar';
import LeftSidebar from '@/components/shared/left-side-bar/LeftSidebar';

const inter = Inter({ subsets: ['latin'] });

/** SEO **/
export const metadata: Metadata = {
  title: 'Threads',
  description: ' A Next.js 14 Meta Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
