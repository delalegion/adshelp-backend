module.exports = ({ env }) => [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'market-assets.strapi.io',
                `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_REGION")}.cdn.digitaloceanspaces.com`,
                `${env("DO_SPACE_BUCKET")}.s3.${env("DO_SPACE_REGION")}.amazonaws.com`,
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'market-assets.strapi.io',
                `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_REGION")}.cdn.digitaloceanspaces.com`,
                `${env("DO_SPACE_BUCKET")}.s3.${env("DO_SPACE_REGION")}.amazonaws.com`,
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
  