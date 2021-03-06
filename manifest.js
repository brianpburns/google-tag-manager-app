export default {
  appId: '@burns/googleTagManager',
  version: '0.1',
  name: 'Google Tag Manager',
  description: 'Add Google tags to your page.',
  type: 'tracking',
  isBeta: true,
  iconUrl: 'https://app-assets-unbounce-com.s3.amazonaws.com/content-smart-builder-apps/gtm/icon.svg',
  moreInfoUrl: 'https://documentation.unbounce.com/hc/en-us/articles/5559507382932',
  categories: ['tracking'],
  files: [],
  settings: {
    id: {
      type: 'string',
      label: 'Google Tag Manager Container ID',
      required: true,
      placeholder: 'GTM-XXXXX',
    },
  },
  externalScripts: [
    'https://app-assets-unbounce-com.s3.amazonaws.com/content-smart-builder-apps/app-reviews/google-tag-manager/index.js',
  ],
};
