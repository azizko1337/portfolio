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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;
