import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Micro Frontend with Module Federation</title>
      </Head>
      <main className={bebas.variable}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
