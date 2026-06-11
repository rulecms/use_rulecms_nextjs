import { RuleCMSWidgetPreFetched } from '../components/RuleCMSWidgetPreFetched';
import { Navigation } from '../components/Navigation';
import { CollapsibleCard } from '../components/CollapsibleCard';
import { acceptanceCloudinaryWidgetData } from '@/fixtures/acceptance-cloudinary-widget-data';
import { getPublishedKey } from '@/lib/rulecms-config';

export const dynamic = 'force-static';

/** Static acceptance payload — no network fetch; img markup is deterministic. */
export default function PrefetchedAcceptancePage() {
  const publishedKey = getPublishedKey();

  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">✅ SSR acceptance (fixture)</div>
        <h1>Pre-fetched Cloudinary image in HTML</h1>
        <p className="rulecms-description">
          Uses fixed widget JSON with a{' '}
          <span className="code-snippet">cloudinary-advanced-image</span> component.
          Run <span className="code-snippet">npm run validate:prefetched-html</span>{' '}
          after build.
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />

        <section className="widget-demo-section">
          <CollapsibleCard title="curl check">
            <pre className="code-snippet">{`curl -s http://localhost:3000/prefetched-acceptance | grep -o '<img[^>]*>'`}</pre>
          </CollapsibleCard>

          <div className="widget-container">
            <RuleCMSWidgetPreFetched
              publishedKey={publishedKey}
              initialData={acceptanceCloudinaryWidgetData}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
