
const fs = require('fs')
const path = require('path')
const glob = require('glob-all')

// TODO: Publish as a new module on npm

const generateServiceWorkerConfig = ({
  inputDirectory = 'src',
  outputDirectory = 'dist',
  serviceWorkerName = 'service-worker-config.js',
  serviceWorkerRelativePath = '',
  navigatorProperty = 'serviceWorkerConfig',
  prefetchRoot = true,
  prefetchResources = [],
  prefetchResourceGlobs = [],
  globOptions = {},
  verbose = false
} = {}) => {

  const foundResources = glob.sync(prefetchResourceGlobs, 
    Object.assign(globOptions, { cwd: inputDirectory, nodir: true }))

  const allResources = prefetchResources.concat(foundResources)

  if (prefetchRoot) {
    allResources.unshift('')
  }

  const resources = allResources.map(res => `${serviceWorkerRelativePath}/${res}`)

  if (verbose) {
    for (let res of resources) console.log(`Added '${res}' to be prefetched`)
  }

  const resourcesAsString = resources.map(res => `    '${res}'`).join(',\n')
    
  const template =
`navigator.${navigatorProperty} = {
  prefetch: [
${resourcesAsString}
  ]
}`

  const filePath = path.join(outputDirectory, serviceWorkerName)
  fs.writeFileSync(filePath, template)
  if (verbose) console.log(`Saved Service Worker config in '${filePath}'`)
}

generateServiceWorkerConfig({ 
  outputDirectory: process.env.NODE_ENV === 'production' ? 'docs' : 'src',
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
  serviceWorkerRelativePath: process.env.NODE_ENV === 'production' ? '/angular.hamburg' : '',
  verbose: true
})
