import { RuleCMSWidgetPreFetched } from '../components/RuleCMSWidgetPreFetched';
import { Navigation } from '../components/Navigation';
import { CollapsibleCard } from '../components/CollapsibleCard';
import { fetchWidgetForDemo } from '@/lib/fetch-widget-for-demo';
import { getPublishedKey } from '@/lib/rulecms-config';

/** ISR: regenerate at most every 60 seconds (Phase 1 acceptance criteria). */
export const revalidate = 60;

export default async function PrefetchedPage() {
  const publishedKey = getPublishedKey();
  const widgetData = await fetchWidgetForDemo({ revalidateSeconds: 60 });

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
          <h2>Pre-fetched widget (revalidate 60s)</h2>
          <p>
            This is the Phase 1 acceptance route. The RuleCMS token stays on the
            server (<span className="code-snippet">RULECMS_TOKEN</span>); only
            render-ready widget JSON is passed to the client component.
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
