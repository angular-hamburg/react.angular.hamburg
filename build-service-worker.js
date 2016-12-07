
const tools = require('sw-build-tools')

tools.generateConfig({
  outputDirectory: process.env.NODE_ENV === 'production' ?
    'docs' : 'src',
  prefetchResources: [
    'bundle.js',
    'service-worker-config.js',
    'media/favicons/favicon.ico',
    'media/favicons/manifest.json',
    'vendors/font-awesome/css/font-awesome.min.css',
    'vendors/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0'
  ],
  prefetchResourceGlobs: [
    'media/*'
  ],
  scope: process.env.NODE_ENV === 'production' ?
    '/angular.hamburg/' : '/',
  verbose: true
})

tools.syncVersion({
  serviceWorkerDirectory: process.env.NODE_ENV === 'production' ?
    'docs' : 'src',
  verbose: true
})
