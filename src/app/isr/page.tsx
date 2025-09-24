import { RuleCMSWidgetComponent } from "../components/RuleCMSWidget";
import { Navigation } from "../components/Navigation";
import { CollapsibleCard } from "../components/CollapsibleCard";

// This enables ISR with revalidation every 30 seconds
export const revalidate = 30;

async function getISRData() {
  // Simulate some data fetching that might change over time
  const currentTimestamp = new Date().toISOString();
  const dataId = Math.random().toString(36).substring(7);
  
  // Simulate fetching data that changes periodically
  const randomData = {
    lastUpdated: currentTimestamp,
    dataId: dataId,
    renderMethod: 'Incremental Static Regeneration (ISR)',
    revalidateAfter: '30 seconds',
    nextRegeneration: new Date(Date.now() + 30000).toISOString(),
    cacheStatus: 'This page regenerates every 30 seconds when accessed'
  };
  
  return randomData;
}

export default async function ISRPage() {
  const isrData = await getISRData();

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          🌊 Incremental Static Regeneration (ISR)
        </div>
        <h1>RuleCMS Widget Demo - ISR</h1>
        <p className="rulecms-description">
          This page uses <strong>Incremental Static Regeneration (ISR)</strong> with <span className="code-snippet">revalidate = 30</span> - static with 30-second updates
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />
        
        <section className="widget-demo-section">
          <h2>Incremental Static Regeneration (ISR) Demo</h2>
          <p>
            The widget below is rendered using <strong>Incremental Static Regeneration</strong>. The page is 
            statically generated but automatically regenerates every 30 seconds when accessed, combining 
            the benefits of static generation with fresh data.
          </p>
          
          <CollapsibleCard title="Dynamic ISR Data">
            <p>This data updates every 30 seconds:</p>
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
                <span className="data-label">Method:</span>
                <span className="data-value">{isrData.renderMethod}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Revalidates:</span>
                <span className="data-value">{isrData.revalidateAfter}</span>
              </div>
              <div className="data-item">
                <span className="data-label">Next Update:</span>
                <span className="data-value">{isrData.nextRegeneration}</span>
              </div>
            </div>
          </CollapsibleCard>

          <CollapsibleCard title="ISR Benefits">
            <ul>
              <li>⚡ <strong>Static speed</strong> - Fast as static sites</li>
              <li>🔄 <strong>Automatic updates</strong> - Content stays fresh</li>
              <li>🎯 <strong>Best of both worlds</strong> - Static performance + dynamic content</li>
              <li>🔍 <strong>Great SEO</strong> - Always serves static HTML first</li>
              <li>📈 <strong>Scalable</strong> - Pages regenerate on-demand</li>
              <li>💾 <strong>Efficient caching</strong> - Only regenerates when needed</li>
            </ul>
          </CollapsibleCard>

          <CollapsibleCard title="How ISR Works">
            <ol>
              <li>First request serves stale static page (if exists)</li>
              <li>Background regeneration triggers if revalidate time passed</li>
              <li>New static page is generated with fresh data</li>
              <li>Subsequent requests get the updated static page</li>
              <li>Process repeats automatically</li>
            </ol>
          </CollapsibleCard>

          <div className="widget-container">
            <RuleCMSWidgetComponent />
          </div>
        </section>

        <CollapsibleCard title="ISR Implementation">
          <p>Key aspects of this ISR implementation:</p>
          <ol>
            <li>Used <span className="code-snippet">export const revalidate = 30</span> to set 30-second revalidation</li>
            <li>Data fetching happens during regeneration</li>
            <li>RuleCMS widgets work seamlessly with ISR</li>
            <li>Static HTML is served immediately, then updated in background</li>
          </ol>
        </CollapsibleCard>

        <CollapsibleCard title="When to Use ISR">
          <ul>
            <li>E-commerce product pages with pricing updates</li>
            <li>News sites with breaking news</li>
            <li>Content that changes periodically but not constantly</li>
            <li>When you need static performance with some dynamic data</li>
            <li>Large sites where rebuilding everything is expensive</li>
          </ul>
        </CollapsibleCard>

        <CollapsibleCard title="ISR Configuration Options">
          <p><strong>Revalidation strategies:</strong></p>
          <ul>
            <li><span className="code-snippet">export const revalidate = 60</span> - Time-based (60 seconds)</li>
            <li><span className="code-snippet">export const revalidate = false</span> - Never revalidate</li>
            <li><span className="code-snippet">export const revalidate = 0</span> - Revalidate on every request</li>
          </ul>
        </CollapsibleCard>
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