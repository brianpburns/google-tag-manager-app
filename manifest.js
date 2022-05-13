export default {
  appId: '@burns/googleTagManager',
  version: '0.1',
  name: 'Google Tag Manager',
  description: 'Add Google tags to your page.',
  type: 'tracking',
  isBeta: true,
  iconUrl: 'https://app-assets-unbounce-com.s3.amazonaws.com/content-smart-builder-apps/gtm/icon.svg',
  moreInfoUrl: 'https://support.google.com/tagmanager/answer/6102821?hl=en',
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
