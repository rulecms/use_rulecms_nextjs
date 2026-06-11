import { RuleCMSWidgetPreFetched } from "../components/RuleCMSWidgetPreFetched";
import { Navigation } from "../components/Navigation";
import { CollapsibleCard } from "../components/CollapsibleCard";
import { fetchWidgetForDemo } from "@/lib/fetch-widget-for-demo";
import { getPublishedKey } from "@/lib/rulecms-config";

export const revalidate = 30;

async function getISRData() {
  const currentTimestamp = new Date().toISOString();
  const dataId = Math.random().toString(36).substring(7);

  return {
    lastUpdated: currentTimestamp,
    dataId,
    renderMethod: 'Incremental Static Regeneration (ISR) with pre-fetched widget',
    revalidateAfter: '30 seconds',
  };
}

export default async function ISRPage() {
  const publishedKey = getPublishedKey();
  const [isrData, widgetData] = await Promise.all([
    getISRData(),
    fetchWidgetForDemo({ revalidateSeconds: 30 }),
  ]);

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          🌊 Incremental Static Regeneration (ISR)
        </div>
        <h1>RuleCMS Widget Demo - ISR</h1>
        <p className="rulecms-description">
          Static page with{' '}
          <span className="code-snippet">revalidate = 30</span>; widget refetched
          on regeneration via{' '}
          <span className="code-snippet">fetchRuleCMSWidget</span>
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />

        <section className="widget-demo-section">
          <h2>Incremental Static Regeneration (ISR) Demo</h2>

          <CollapsibleCard title="Dynamic ISR Data">
            <div className="data-list">
              <div className="data-item">
                <span className="data-label">Data ID:</span>
                <span className="data-value">{isrData.dataId}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Last Updated:</span>
                <span className="data-value">{isrData.lastUpdated}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Revalidates:</span>
                <span className="data-value">{isrData.revalidateAfter}</span>
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
          and Next.js ISR
        </p>
      </footer>
    </div>
  );
}
