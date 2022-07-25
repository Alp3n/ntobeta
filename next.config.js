const prismic = require('@prismicio/client');
const sm = require('./sm.json');

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
    swcMinify: true,
    images: {
      lodaer: 'imgix',
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      domains: ['images.prismic.io', 'ntobeta.cdn.prismic.io'],
    },
  };
};

module.exports = nextConfig;
