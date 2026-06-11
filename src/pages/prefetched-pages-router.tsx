import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { RuleCMSWidgetPreFetched } from '../app/components/RuleCMSWidgetPreFetched';
import { fetchWidgetForDemo } from '@/lib/fetch-widget-for-demo';
import { getPublishedKey } from '@/lib/rulecms-config';
import type { RuleCMSWidgetData } from '@rulecms/widget-react/server';

interface PagesRouterPrefetchedProps {
  publishedKey: string;
  widgetData: RuleCMSWidgetData;
  builtAt: string;
}

export const getStaticProps: GetStaticProps<PagesRouterPrefetchedProps> = async () => {
  const publishedKey = getPublishedKey();
  const widgetData = await fetchWidgetForDemo({ revalidateSeconds: 60 });

  return {
    props: {
      publishedKey,
      widgetData,
      builtAt: new Date().toISOString(),
    },
    revalidate: 60,
  };
};

export default function PagesRouterPrefetchedPage({
  publishedKey,
  widgetData,
  builtAt,
}: PagesRouterPrefetchedProps) {
  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">📄 Pages Router + getStaticProps</div>
        <h1>RuleCMS Widget — Pages Router SSG/ISR</h1>
        <p className="rulecms-description">
          Widget fetched in <span className="code-snippet">getStaticProps</span>{' '}
          with <span className="code-snippet">revalidate: 60</span>, rendered via{' '}
          <span className="code-snippet">mode=&quot;pre-fetched&quot;</span>
        </p>
      </header>

      <main className="rulecms-main">
        <p>
          Built at: <span className="code-snippet">{builtAt}</span>
        </p>
        <p>
          <Link href="/prefetched">← App Router pre-fetched example</Link>
        </p>

        <div className="widget-container">
          <RuleCMSWidgetPreFetched
            publishedKey={publishedKey}
            initialData={widgetData}
          />
        </div>
      </main>
    </div>
  );
}
