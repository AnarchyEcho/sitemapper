const SitemapGenerator = require('sitemap-generator');

const site = 'https://gimpinfo.vercel.app';

const generator = SitemapGenerator(site, {
  stripQuerystring: false,
  maxDepth: 0,
  filepath: './sitemap.xml',
  lastMod: true,
});

generator.on('done', () => {
  console.log('Finished');
  generator.stop();
});

generator.start();