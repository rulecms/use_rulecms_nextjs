import { RuleCMSWidgetPreFetched } from "../components/RuleCMSWidgetPreFetched";
import { Navigation } from "../components/Navigation";
import { CollapsibleCard } from "../components/CollapsibleCard";
import { fetchWidgetForDemo } from "@/lib/fetch-widget-for-demo";
import { getPublishedKey } from "@/lib/rulecms-config";

export const dynamic = 'force-static';

async function getBuildTimeData() {
  const buildTimestamp = new Date().toISOString();
  const buildId = Math.random().toString(36).substring(7);

  return {
    buildTimestamp,
    buildId,
    renderMethod: 'Static Site Generation (SSG) with pre-fetched widget',
    nextBuild: 'Widget JSON fetched at build time',
  };
}

export default async function SSGPage() {
  const publishedKey = getPublishedKey();
  const [buildData, widgetData] = await Promise.all([
    getBuildTimeData(),
    fetchWidgetForDemo(),
  ]);

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          ⚡ Static Site Generation (SSG)
        </div>
        <h1>RuleCMS Widget Demo - SSG</h1>
        <p className="rulecms-description">
          Widget fetched at build time with{' '}
          <span className="code-snippet">fetchRuleCMSWidget</span> and baked into
          static HTML
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />

        <section className="widget-demo-section">
          <h2>Static Site Generation (SSG) Demo</h2>

          <CollapsibleCard title="Build-Time Data">
            <div className="data-list">
              <div className="data-item">
                <span className="data-label">Build ID:</span>
                <span className="data-value">{buildData.buildId}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Built at:</span>
                <span className="data-value">{buildData.buildTimestamp}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Method:</span>
                <span className="data-value">{buildData.renderMethod}</span>
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
          and Next.js SSG
        </p>
      </footer>
    </div>
  );
}
