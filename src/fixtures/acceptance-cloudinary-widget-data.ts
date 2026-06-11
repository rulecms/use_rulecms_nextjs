import type { RuleCMSWidgetData } from '@rulecms/widget-react/server';

/**
 * Static widget payload with a Cloudinary image — mirrors
 * widget-react mock-pre-fetched-widget-data.ts for acceptance tests.
 * Used by /prefetched-acceptance so curl validation does not depend on
 * which live widget the demo published key points at.
 */
export const acceptanceCloudinaryWidgetData: RuleCMSWidgetData = {
  displayItemList: {
    rows: [
      {
        id: 'row-hero',
        columns: [
          {
            id: 'col-hero-image',
            type: 'cloudinary-advanced-image',
            widgetAttributes: {
              'media-selector-3-resolutions': { all: 'images/test-uuid/hero-id' },
              'pass-through-image-attributes-alt-3-resolutions': {
                all: 'Guest pouring acrylic paint over a canvas',
              },
              'pass-through-image-attributes-width-3-resolutions': { all: '3024' },
              'pass-through-image-attributes-height-3-resolutions': { all: '4032' },
            },
          },
        ],
      },
    ],
  },
  widgetCollections: {},
};
