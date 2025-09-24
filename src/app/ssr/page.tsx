import { RuleCMSWidgetComponent } from "../components/RuleCMSWidget";
import { Navigation } from "../components/Navigation";
import { CollapsibleCard } from "../components/CollapsibleCard";

// This forces the page to be server-side rendered on each request
export const dynamic = 'force-dynamic';

async function getServerData() {
  // Simulate some server-side data fetching
  const timestamp = new Date().toISOString();
  const requestId = Math.random().toString(36).substring(7);
  
  return {
    timestamp,
    requestId,
    renderMethod: 'Server-Side Rendering (SSR)'
  };
}

export default async function SSRPage() {
  const serverData = await getServerData();

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          🔄 Server-Side Rendering (SSR)
        </div>
        <h1>RuleCMS Widget Demo - SSR</h1>
        <p className="rulecms-description">
          This page uses <strong>Server-Side Rendering (SSR)</strong> with <span className="code-snippet">dynamic = &apos;force-dynamic&apos;</span> - rendered fresh on each request
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />
        
        <section className="widget-demo-section">
          <h2>Server-Side Rendering (SSR) Demo</h2>
          <p>
            The widget below is rendered using <strong>Server-Side Rendering</strong>. The page is dynamically rendered 
            on the server for each request, providing fresh data and SEO benefits.
          </p>
          
          <CollapsibleCard title="Server-Side Data">
            <p>This data was generated on the server at request time:</p>
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

          <CollapsibleCard title="SSR Benefits">
            <ul>
              <li>🔍 <strong>Better SEO</strong> - Content is rendered server-side</li>
              <li>⚡ <strong>Faster initial page load</strong> - HTML is pre-rendered</li>
              <li>🔄 <strong>Fresh data</strong> - Content is generated for each request</li>
              <li>🌐 <strong>Better social sharing</strong> - Meta tags are server-rendered</li>
            </ul>
          </CollapsibleCard>

          <div className="widget-container">
            <RuleCMSWidgetComponent />
          </div>
        </section>

        <CollapsibleCard title="SSR Implementation">
          <p>Key aspects of this SSR implementation:</p>
          <ol>
            <li>Used <span className="code-snippet">export const dynamic = &apos;force-dynamic&apos;</span> to ensure server-side rendering</li>
            <li>Server-side data fetching with <span className="code-snippet">async/await</span></li>
            <li>RuleCMS widgets work seamlessly with SSR</li>
            <li>Each request generates fresh server data</li>
          </ol>
        </CollapsibleCard>

        <CollapsibleCard title="When to Use SSR">
          <ul>
            <li>When you need fresh data on every request</li>
            <li>For pages with dynamic, user-specific content</li>
            <li>When SEO is critical and content changes frequently</li>
            <li>For personalized experiences that can&apos;t be cached</li>
          </ul>
        </CollapsibleCard>
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