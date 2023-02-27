import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from './GlobalStyles';
import StyledComponentsRegistry from './lib/registry';
import { GlobalContextProvider } from './components/GlobalContext';
import Nav from './components/nav';
import SetIsPageLoaded from './components/nav/SetIsPageLoaded';

function MyApp({ Component, pageProps }: AppProps) {
  return <StyledComponentsRegistry>
      <>
        <Head>
          <title>Full-Stack Developer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
          <script defer src="./vendors/particles.js"></script>
        </Head>
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
