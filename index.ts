const SitemapGenerator = require('sitemap-generator');
import fs from 'fs';

const logger = fs.createWriteStream('output.txt', {
  flags: 'a',
});

const site = 'https://gimpinfo.vercel.app';

const generator = SitemapGenerator(site, {
  stripQuerystring: false,
});

generator.on('add', (url: any) => {
  logger.write(`${url}\n`);
});

generator.on('done', () => {
  console.log('Finished');
  generator.stop();
});

generator.start();