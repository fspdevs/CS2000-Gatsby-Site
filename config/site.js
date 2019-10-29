module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Capital Source 2000', // Navigation and Site Title
  titleAlt: 'CS2000', // Title for JSONLD
  description: 'Profit Through Small Business',
  url: 'https://capitalsource2000.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://capitalsource2000.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'src/images/cslogo.png', // Used for manifest favicon generation
  shortName: 'CS2000', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Avery-Dante Hinds', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
};
