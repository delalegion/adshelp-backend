module.exports = ({ env }) => [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            directives: {
              'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
              'img-src': ["'self'", 'data:', 'cdn.jsdelivr.net', 'strapi.io', `${env('DO_SPACE_BUCKET')}.s3.${env('DO_SPACE_REGION')}.amazonaws.com`, `${env('DO_SPACE_BUCKET')}.${env('DO_SPACE_REGION')}.cdn.digitaloceanspaces.com`],
            },
          }
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
  