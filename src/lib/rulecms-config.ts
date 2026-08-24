/**
 * Demo widget with a CloudinaryAdvancedImage (RuleCMS composer).
 * Used by all example routes when env vars are unset.
 */
export const DEMO_PUBLISHED_KEY =
  'ab0ea12b-af32-4d61-90b2-6af534f87290---widget-27eec7b6-669a-4ceb-b37c-14fdb7abb743';

/** Demo app token — local demo only; use RULECMS_TOKEN on the server path. */
export const DEMO_RULECMS_TOKEN =
  'lEYWhW85gwxHXj3cyomTsNra6MaXu8Q90aa1Q5zjNNVUdrGko7VYLZtMH5n9FI5E';

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

/** Client-fetch token (CSR). Prefer server pre-fetched mode in production. */
export function getClientToken(): string {
  return process.env.NEXT_PUBLIC_RULECMS_TOKEN || DEMO_RULECMS_TOKEN;
}
