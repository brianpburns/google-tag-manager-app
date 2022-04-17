import React from 'react';
import { component, Schema } from 'ub-shared';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import { validateContainerId } from './utils';

export const Component = component({
  componentTypeId: 'googleTagManager',
  displayName: 'Google Tag Manager',
  tags: ['head-script'],
  schema: Schema.object({
    id: Schema.string().noControls(),
  }),
  Component({ data: { id }, mode }: ComponentProps<{ id: string }>) {
    const validId = validateContainerId(id);

    if (mode.type !== 'publish' || !id || !validId) {
      return null;
    }

    // Requires head script and body script. The body script is appended once the body has loaded.
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${id}');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                const noscript = document.createElement('noscript');
                const iframe = document.createElement('iframe');
                iframe.src = 'https://www.googletagmanager.com/ns.html?id=${id}';
                iframe.height = '0';
                iframe.width = '0';
                iframe.style = 'display:none;visibility:hidden';

                noscript.appendChild(iframe);

                document.body.appendChild(noscript);
              }
            `,
          }}
        />
      </>
    );
  },
  version: 0,
});
