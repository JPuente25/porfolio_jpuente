import { I18NProvider } from '@/app/i18n';
import Theme from '@/styles/Theme';
import GlobalStyles from '@/styles/globalStyles';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const font = Poppins({
   weight: ['400', '700'],
   style: 'normal',
   variable: '--font-poppins',
   subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <I18NProvider>
            <Head>
               <meta
                  name='description'
                  content='Jaime Puente Portfolio'
               />
               <meta
                  name='viewport'
                  content='width=device-width, initial-scale=1'
               />
            </Head>
            <Theme>
               <GlobalStyles />
               <Header />
               <main className={font.className}>
                  <Component {...pageProps} />
                  <Analytics />
               </main>
               <Footer />
            </Theme>
         </I18NProvider>
      </>
   );
}
