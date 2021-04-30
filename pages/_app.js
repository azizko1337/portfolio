import { ThemeProvider } from "styled-components";
import LoadingPage from "../components/Loading/LoadingPage";
import { theme } from "../styles/colors.js";
import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;
