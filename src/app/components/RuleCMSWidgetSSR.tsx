import { RuleCMSWidget } from '@rulecms/widget-react';

interface RuleCMSWidgetSSRProps {
  publishedKey?: string;
}

export function RuleCMSWidgetSSR({ publishedKey }: RuleCMSWidgetSSRProps) {
  // Use the provided publishedKey or fallback to environment variable or default
  const widgetKey = publishedKey || 
    process.env.NEXT_PUBLIC_PUBLISHED_KEY || 
    "ab0ea12b-af32-4d61-90b2-6af534f87290---widget-27eec7b6-669a-4ceb-b37c-14fdb7abb743";

  return <RuleCMSWidget publishedKey={widgetKey} />;
}