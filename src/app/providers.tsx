'use client';

import { ReactNode } from 'react';
import { RuleCMSWidgetProvider } from '@rulecms/widget-react';

interface RuleCMSProviderProps {
  children: ReactNode;
}

export function RuleCMSProvider({ children }: RuleCMSProviderProps) {
  const appToken = process.env.NEXT_PUBLIC_RULECMS_TOKEN || "lEYWhW85gwxHXj3cyomTsNra6MaXu8Q90aa1Q5zjNNVUdrGko7VYLZtMH5n9FI5E";
  const endpoint = process.env.NEXT_PUBLIC_RULECMS_ENDPOINT || "https://rulecms.com";

  return (
    <RuleCMSWidgetProvider token={appToken} endpoint={endpoint}>
      {children}
    </RuleCMSWidgetProvider>
  );
}