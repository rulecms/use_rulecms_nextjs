import {
  fetchRuleCMSWidget,
  type RuleCMSWidgetData,
} from '@rulecms/widget-react/server';
import {
  getPublishedKey,
  getRuleCMSEndpoint,
  getServerToken,
} from './rulecms-config';

interface FetchWidgetForDemoOptions {
  revalidateSeconds?: number;
  /** Skip Next.js fetch cache — use on /prefetched while iterating in composer. */
  noStore?: boolean;
}

/** Fetch render-ready widget data on the server or at build time. */
export async function fetchWidgetForDemo(
  options: FetchWidgetForDemoOptions = {}
): Promise<RuleCMSWidgetData> {
  const { revalidateSeconds, noStore } = options;

  let fetchOptions: RequestInit | undefined;
  if (noStore) {
    fetchOptions = { cache: 'no-store' };
  } else if (revalidateSeconds) {
    fetchOptions = { next: { revalidate: revalidateSeconds } };
  }

  return fetchRuleCMSWidget({
    publishedKey: getPublishedKey(),
    token: getServerToken(),
    endpoint: getRuleCMSEndpoint(),
    fetchOptions,
  });
}
