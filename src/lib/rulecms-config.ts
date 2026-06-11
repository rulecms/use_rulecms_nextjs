/** Demo published key — replace via env for your own widget. */
export const DEMO_PUBLISHED_KEY =
  'ab0ea12b-af32-4d61-90b2-6af534f87290---widget-27eec7b6-669a-4ceb-b37c-14fdb7abb743';

/** Demo app token — used when env vars are unset (local demo only). */
export const DEMO_RULECMS_TOKEN =
  'lEYWhW85gwxHXj3cyomTsNra6MaXu8Q90aa1Q5zjNNVUdrGko7VYLZtMH5n9FI5E';

export const DEFAULT_RULECMS_ENDPOINT = 'https://rulecms.com';

export function getPublishedKey(): string {
  return (
    process.env.RULECMS_PUBLISHED_KEY ||
    process.env.NEXT_PUBLIC_PUBLISHED_KEY ||
    DEMO_PUBLISHED_KEY
  );
}

/** Server-only token — never prefixed with NEXT_PUBLIC_. */
export function getServerToken(): string {
  return process.env.RULECMS_TOKEN || DEMO_RULECMS_TOKEN;
}

export function getRuleCMSEndpoint(): string {
  return (
    process.env.RULECMS_ENDPOINT ||
    process.env.NEXT_PUBLIC_RULECMS_ENDPOINT ||
    DEFAULT_RULECMS_ENDPOINT
  );
}
