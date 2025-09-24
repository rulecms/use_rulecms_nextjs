'use client';

import { RuleCMSWidget } from '@rulecms/widget-react';

export function RuleCMSWidgetComponent() {
  // Production values from environment variables
  const publishedKey = process.env.NEXT_PUBLIC_PUBLISHED_KEY || "ab0ea12b-af32-4d61-90b2-6af534f87290---widget-27eec7b6-669a-4ceb-b37c-14fdb7abb743";

  return (
    <RuleCMSWidget publishedKey={publishedKey} />
  );
}