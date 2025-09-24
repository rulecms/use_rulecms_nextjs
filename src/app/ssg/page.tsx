import { RuleCMSWidgetComponent } from "../components/RuleCMSWidget";
import { Navigation } from "../components/Navigation";
import { CollapsibleCard } from "../components/CollapsibleCard";

// This will be statically generated at build time
export const dynamic = 'force-static';

async function getBuildTimeData() {
  // Simulate some build-time data fetching
  const buildTimestamp = new Date().toISOString();
  const buildId = Math.random().toString(36).substring(7);
  
  return {
    buildTimestamp,
    buildId,
    renderMethod: 'Static Site Generation (SSG)',
    nextBuild: 'This page was pre-rendered at build time'
  };
}

export default async function SSGPage() {
  const buildData = await getBuildTimeData();

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          ⚡ Static Site Generation (SSG)
        </div>
        <h1>RuleCMS Widget Demo - SSG</h1>
        <p className="rulecms-description">
          This page uses <strong>Static Site Generation (SSG)</strong> with <span className="code-snippet">dynamic = &apos;force-static&apos;</span> - pre-rendered at build time
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />
        
        <section className="widget-demo-section">
          <h2>Static Site Generation (SSG) Demo</h2>
          <p>
            The widget below is rendered using <strong>Static Site Generation</strong>. The page was pre-rendered 
            at build time, making it extremely fast to serve and great for SEO.
          </p>
          
          <CollapsibleCard title="Build-Time Data">
            <p>This data was generated at build time and remains static:</p>
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
              <div className="data-item">
                <span className="data-label">Status:</span>
                <span className="data-value">{buildData.nextBuild}</span>
              </div>
            </div>
          </CollapsibleCard>

          <CollapsibleCard title="SSG Benefits">
            <ul>
              <li>⚡ <strong>Blazing fast</strong> - Pre-rendered HTML served instantly</li>
              <li>🔍 <strong>Perfect SEO</strong> - Fully rendered at build time</li>
              <li>💰 <strong>Cost effective</strong> - Can be served from CDN</li>
              <li>🛡️ <strong>Highly secure</strong> - No server-side vulnerabilities</li>
              <li>📊 <strong>Predictable performance</strong> - Consistent load times</li>
            </ul>
          </CollapsibleCard>

          <div className="widget-container">
            <RuleCMSWidgetComponent />
          </div>
        </section>

        <CollapsibleCard title="SSG Implementation">
          <p>Key aspects of this SSG implementation:</p>
          <ol>
            <li>Used <span className="code-snippet">export const dynamic = &apos;force-static&apos;</span> to ensure static generation</li>
            <li>Build-time data fetching during the build process</li>
            <li>RuleCMS widgets are included in the static HTML</li>
            <li>Page is served as static files from CDN</li>
          </ol>
        </CollapsibleCard>

        <CollapsibleCard title="When to Use SSG">
          <ul>
            <li>For content that doesn&apos;t change frequently</li>
            <li>Marketing pages, blogs, documentation</li>
            <li>When maximum performance is required</li>
            <li>For content that can be pre-rendered at build time</li>
            <li>When you want to serve from a CDN globally</li>
          </ul>
        </CollapsibleCard>

        <CollapsibleCard title="Build Process">
          <p>During <span className="code-snippet">npm run build</span>:</p>
          <ol>
            <li>Next.js pre-renders this page with RuleCMS widgets</li>
            <li>Static HTML, CSS, and JavaScript are generated</li>
            <li>Files can be deployed to any static hosting service</li>
            <li>No server required - pure static files!</li>
          </ol>
        </CollapsibleCard>
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