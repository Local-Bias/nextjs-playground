import type { AppProps } from 'next/app';
import 'sanitize.css';
import Layout from 'src/components/layout';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
