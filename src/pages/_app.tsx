import { Provider } from '@/app/Provider';
import { I18NProvider } from '@/app/i18n';
import Theme from '@/styles/Theme';
import GlobalStyles from '@/styles/globalStyles';
import backgrounds from '@/variables/backgrounds';
import { personalData } from '@/variables/personal';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Analytics } from '@vercel/analytics/react';

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
            <Provider>
               <Theme>
                  <GlobalStyles />
                  <Header />
                  <main className={font.className}>
                     <Component {...pageProps} />
                     <Analytics />
                  </main>
                  <Footer />
               </Theme>
            </Provider>
         </I18NProvider>
      </>
   );
}
