import * as sourceComponents from '@rulecms/source-components-react';
import type { LibraryRegistrationMap } from '@rulecms/widget-react';

/**
 * Component library registrations (required since @rulecms/widget-react v15 —
 * the widget package no longer depends on any concrete component library).
 *
 * The default library is registered EAGERLY (static import) so pre-fetched
 * SSR pages resolve synchronously: server HTML and hydration render
 * identically with zero async. Apps that only use client-fetch mode may
 * register a thunk instead to code-split the library:
 *   { default: () => import('@rulecms/source-components-react') }
 *
 * Declared at module scope so the map has a stable identity.
 */
export const rulecmsLibraries: LibraryRegistrationMap = {
  default: sourceComponents,
};
