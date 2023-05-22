import { Provider } from '@/app/Provider';
import Theme from '@/styles/Theme';
import GlobalStyles from '@/styles/globalStyles';
import backgrounds from '@/variables/backgrounds';
import images from '@/variables/images';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { I18NProvider } from '@/app/i18n';

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
               <title>Jaime Puente</title>
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
                  href={images.logo}
               />
               <link
                  rel='preload'
                  href={'https://i.gyazo.com/24167cf916456a9f951915cacd858ed0.png'}
                  as='image'
               />
               <link
                  rel='preload'
                  href={backgrounds.home}
                  as='image'
               />
               <link
                  rel='preload'
                  href={backgrounds.about}
                  as='image'
               />
               <link
                  rel='preload'
                  href={backgrounds.skills}
                  as='image'
               />
               <link
                  rel='preload'
                  href={backgrounds.projects}
                  as='image'
               />
               <link
                  rel='preload'
                  href={backgrounds.contact}
                  as='image'
               />
               <link
                  rel='preload'
                  href={images.logo}
                  as='image'
               />
               <link
                  rel='preload'
                  href={images.profilePicture}
                  as='image'
               />
            </Head>
            <Provider>
               <Theme>
                  <GlobalStyles />
                  <Header />
                  <main className={font.className}>
                     <Component {...pageProps} />
                  </main>
                  <Footer />
               </Theme>
            </Provider>
         </I18NProvider>
      </>
   );
}
