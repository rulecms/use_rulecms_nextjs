import { RuleCMSProvider } from '../providers';

/**
 * The routes that render a client `RuleCMSWidget` and take its token and
 * libraries from the provider. It stays off the root layout because it loads
 * widget-react and the default library in the browser: there it shipped that
 * JavaScript to every page, the zero-JS `/server-component` included.
 */
export default function RuleCMSProviderLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RuleCMSProvider>{children}</RuleCMSProvider>;
}
