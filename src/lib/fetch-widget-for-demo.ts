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
}

/** Fetch render-ready widget data on the server or at build time. */
export async function fetchWidgetForDemo(
  options: FetchWidgetForDemoOptions = {}
): Promise<RuleCMSWidgetData> {
  const { revalidateSeconds } = options;

  return fetchRuleCMSWidget({
    publishedKey: getPublishedKey(),
    token: getServerToken(),
    endpoint: getRuleCMSEndpoint(),
    fetchOptions: revalidateSeconds
      ? { next: { revalidate: revalidateSeconds } }
      : undefined,
  });
}
