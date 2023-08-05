import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Layout } from "../components/layout/Layout";
import { SiteTheme } from "../theme/SiteTheme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SiteTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SiteTheme>
    </Provider>
  );
}
