import Footer from '../components/Footer';
import Header from '../components/Header';
import Theme from '@/styles/Theme';
import GlobalStyles from '@/styles/globalStyles';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Jaime Puente - Home</title>
            <meta
               name='description'
               content='Personal Jaime Puente Portfolio'
            />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link
               rel='icon'
               href='/favicon.ico'
            />
         </Head>
         <Theme>
            <GlobalStyles />
            <Header />
            <Component {...pageProps} />
            <Footer />
         </Theme>
      </>
   );
}
