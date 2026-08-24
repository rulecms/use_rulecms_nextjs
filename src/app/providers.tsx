'use client';

import { ReactNode } from 'react';
import { RuleCMSWidgetProvider } from '@rulecms/widget-react';
import { getClientToken } from '@/lib/rulecms-config';
import { rulecmsLibraries } from '@/lib/rulecms-libraries';

interface RuleCMSProviderProps {
  children: ReactNode;
}

export function RuleCMSProvider({ children }: RuleCMSProviderProps) {
  const appToken = getClientToken();

  return (
    <RuleCMSWidgetProvider token={appToken} libraries={rulecmsLibraries}>
      {children}
    </RuleCMSWidgetProvider>
  );
}
