import { ThemeProvider } from "styled-components";
import LoadingPage from "../components/Loading/LoadingPage";
import Head from "next/head";
import { theme } from "../styles/colors.js";
import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Antoni Załupka</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/icons/icon-512x512.png" />
        <meta name="theme-color" content="#121212" />
        <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#121212" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
        />
        <meta name="description" content="Antoni Załupka's portfolio." />
        <meta
          name="keywords"
          content="antoni załupka zalupka antonizalupka.tk"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
