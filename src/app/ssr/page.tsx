import { RuleCMSWidgetPreFetched } from "../components/RuleCMSWidgetPreFetched";
import { Navigation } from "../components/Navigation";
import { CollapsibleCard } from "../components/CollapsibleCard";
import { fetchWidgetForDemo } from "@/lib/fetch-widget-for-demo";
import { getPublishedKey } from "@/lib/rulecms-config";

export const dynamic = 'force-dynamic';

async function getServerData() {
  const timestamp = new Date().toISOString();
  const requestId = Math.random().toString(36).substring(7);

  return {
    timestamp,
    requestId,
    renderMethod: 'Server-Side Rendering (SSR) with pre-fetched widget',
  };
}

export default async function SSRPage() {
  const publishedKey = getPublishedKey();
  const [serverData, widgetData] = await Promise.all([
    getServerData(),
    fetchWidgetForDemo(),
  ]);

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          🔄 Server-Side Rendering (SSR)
        </div>
        <h1>RuleCMS Widget Demo - SSR</h1>
        <p className="rulecms-description">
          Fetches widget JSON on each request via{' '}
          <span className="code-snippet">fetchRuleCMSWidget</span>, then renders
          with <span className="code-snippet">mode=&quot;pre-fetched&quot;</span>
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />

        <section className="widget-demo-section">
          <h2>Server-Side Rendering (SSR) Demo</h2>
          <p>
            Widget content is in the server HTML on first paint — not loaded via a
            client-side spinner.
          </p>

          <CollapsibleCard title="Server-Side Data">
            <div className="data-list">
              <div className="data-item">
                <span className="data-label">Request ID:</span>
                <span className="data-value">{serverData.requestId}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Rendered at:</span>
                <span className="data-value">{serverData.timestamp}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Method:</span>
                <span className="data-value">{serverData.renderMethod}</span>
              </div>
            </div>
          </CollapsibleCard>

          <div className="widget-container">
            <RuleCMSWidgetPreFetched
              publishedKey={publishedKey}
              initialData={widgetData}
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
          and Next.js SSR
        </p>
      </footer>
    </div>
  );
}
