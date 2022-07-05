const SitemapGenerator = require('sitemap-generator');

const site = 'https://gimpinfo.vercel.app';

const generator = SitemapGenerator(site, {
  stripQuerystring: false,
});

generator.on('done', () => {
  console.log('Finished');
  generator.stop();
});

generator.start();