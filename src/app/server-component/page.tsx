import { RuleCMSWidgetServer } from '@rulecms/widget-react/server';
import { Navigation } from '../components/Navigation';
import { CollapsibleCard } from '../components/CollapsibleCard';
import { getPublishedKey, getServerToken, getRuleCMSEndpoint } from '@/lib/rulecms-config';

export const dynamic = 'force-dynamic';

/** Phase 2: zero-JS widget — RuleCMSWidgetServer renders entirely on the server. */
export default function ServerComponentPage() {
  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">🚫📦 RSC — zero widget JS</div>
        <h1>RuleCMS Widget — React Server Component</h1>
        <p className="rulecms-description">
          Rendered with{' '}
          <span className="code-snippet">RuleCMSWidgetServer</span> from{' '}
          <span className="code-snippet">@rulecms/widget-react/server</span>.
          No widget JavaScript ships to the browser — works with JS disabled.
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />

        <section className="widget-demo-section">
          <h2>Zero-JS server-rendered widget</h2>

          <CollapsibleCard title="Verify">
            <pre className="code-snippet">{`curl -s http://localhost:3000/server-component | grep -o '<img[^>]*>'`}</pre>
            <p>Also try disabling JavaScript in DevTools — the widget still renders.</p>
          </CollapsibleCard>

          <div className="widget-container">
            <RuleCMSWidgetServer
              publishedKey={getPublishedKey()}
              token={getServerToken()}
              endpoint={getRuleCMSEndpoint()}
              fetchOptions={{ cache: 'no-store' }}
              libraries={{ default: () => import('@rulecms/source-components-react') }}
              errorFallback={<p>Content is temporarily unavailable.</p>}
            />
          </div>
        </section>
      </main>

      <footer className="rulecms-footer">
        <p>
          Built with <span className="heart">❤️</span> using{' '}
          <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">
            RuleCMS
          </a>{' '}
          React Server Components
        </p>
      </footer>
    </div>
  );
}
