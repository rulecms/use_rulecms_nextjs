'use client';

import { ReactNode } from 'react';
import { RuleCMSWidgetProvider } from '@rulecms/widget-react';
import {
  DEFAULT_RULECMS_ENDPOINT,
  getClientToken,
  getRuleCMSEndpoint,
} from '@/lib/rulecms-config';

interface RuleCMSProviderProps {
  children: ReactNode;
}

export function RuleCMSProvider({ children }: RuleCMSProviderProps) {
  const appToken = getClientToken();
  const endpoint = getRuleCMSEndpoint() || DEFAULT_RULECMS_ENDPOINT;

  return (
    <RuleCMSWidgetProvider token={appToken} endpoint={endpoint}>
      {children}
    </RuleCMSWidgetProvider>
  );
}
