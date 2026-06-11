import { RuleCMSWidgetPreFetched } from '../components/RuleCMSWidgetPreFetched';
import { Navigation } from '../components/Navigation';
import { CollapsibleCard } from '../components/CollapsibleCard';
import { fetchWidgetForDemo } from '@/lib/fetch-widget-for-demo';
import { getPublishedKey } from '@/lib/rulecms-config';

/** Fetch fresh widget JSON each request (no Next.js fetch cache). */
export const dynamic = 'force-dynamic';

export default async function PrefetchedPage() {
  const publishedKey = getPublishedKey();
  const widgetData = await fetchWidgetForDemo({ noStore: true });

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          🖼️ Pre-fetched SSR (Phase 1 acceptance)
        </div>
        <h1>RuleCMS Widget — Server HTML with Images</h1>
        <p className="rulecms-description">
          Widget data is fetched with{' '}
          <span className="code-snippet">fetchRuleCMSWidget</span> on the server,
          then rendered with{' '}
          <span className="code-snippet">mode=&quot;pre-fetched&quot;</span>.
          Images appear in the initial HTML — verify with{' '}
          <span className="code-snippet">curl</span> or view-source.
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />

        <section className="widget-demo-section">
          <h2>Live demo widget (Cloudinary image)</h2>
          <p>
            Published key{' '}
            <span className="code-snippet">{publishedKey}</span> — fetched on
            the server with a 60s upstream cache. The RuleCMS token stays in{' '}
            <span className="code-snippet">RULECMS_TOKEN</span> (never sent to
            the browser).
          </p>

          <CollapsibleCard title="Acceptance check">
            <p>After <span className="code-snippet">npm run build &amp;&amp; npm start</span>:</p>
            <pre className="code-snippet">{`curl -s http://localhost:3000/prefetched | grep -o '<img[^>]*>'`}</pre>
            <p>
              Expected: at least one <span className="code-snippet">&lt;img&gt;</span>{' '}
              with a <span className="code-snippet">res.cloudinary.com</span> URL,
              plus <span className="code-snippet">srcset</span> and dimension or
              aspect markup.
            </p>
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
          pre-fetched SSR
        </p>
      </footer>
    </div>
  );
}
