'use client';

import { RuleCMSWidget } from '@rulecms/widget-react';
import { getPublishedKey } from '@/lib/rulecms-config';

export function RuleCMSWidgetComponent() {
  return <RuleCMSWidget publishedKey={getPublishedKey()} />;
}
