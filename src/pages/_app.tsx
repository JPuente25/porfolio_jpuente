import Footer from '../components/Footer';
import Header from '../components/Header';
import Theme from '@/styles/Theme';
import GlobalStyles from '@/styles/globalStyles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Poppins } from 'next/font/google';

export const font = Poppins({
   weight: ["400", "700"],
   style: "normal",
   variable: "--font-poppins",
   subsets: ['latin'],
})

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
               href='https://i.gyazo.com/484cc2ef8d62e2ef1b07836019cbf0ae.png'
            />
         </Head>
         <Theme>
            <GlobalStyles/>
            <Header />
            <main className={font.className}>
               <Component {...pageProps} />
            </main>
            <Footer />
         </Theme>
      </>
   );
}
