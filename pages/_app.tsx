import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../components/GlobalStyles';
import StyledComponentsRegistry from './lib/registry';
import GlobalContextProvider from '../components/GlobalContext';
import Nav from '../components/nav';
import SetIsPageLoaded from '../components/nav/SetIsPageLoaded';
import { useRouter } from 'next/router';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  return <StyledComponentsRegistry>
      <>
        <Head>
          <title>Full-Stack Developer</title>
          <meta name="description" content="Hello! I'm Oskar Dąbrowski Full-Stack Developer!" />
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />
          <link rel="icon" href="/images/icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js'></script>
          <script src='https://www.curtainsjs.com/build/curtains.min.js'></script>
        </Head>
        <Script defer src="./vendors/particles.js" strategy="worker" />
        <GlobalContextProvider>
          <Component {...pageProps}>
            <Nav />
            <SetIsPageLoaded />
            <GlobalStyles />
          </Component>
        </GlobalContextProvider>
      </>
  </StyledComponentsRegistry>

}

export default MyApp
