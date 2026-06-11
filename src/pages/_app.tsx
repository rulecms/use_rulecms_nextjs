import type { AppProps } from 'next/app';
import { RuleCMSProvider } from '../app/providers';
import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RuleCMSProvider>
      <Component {...pageProps} />
    </RuleCMSProvider>
  );
}
