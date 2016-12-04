
const fs = require('fs')
const path = require('path')
const glob = require('glob-all')

// TODO: Publish as a new module on npm

const list = [
  'bundle.js',
  'service-worker-config.js',
  'media/favicons/favicon.ico',
  'media/favicons/manifest.json',
  'vendors/font-awesome/css/font-awesome.min.css',
  'vendors/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0'
]

const patterns = [
  'media/*'
]

const generateConfig = ({
  inputDirectory = 'src',
  outputDirectory = 'dist',
  name = 'service-worker-config.js',
  global = 'serviceWorkerConfig',
  root = true,
  resourceList = [],
  resourcePatterns = [],
  relativePath = '',
  verbose = false
} = {}) => {

  const foundResources = glob.sync(resourcePatterns, { cwd: inputDirectory, nodir: true })
  const allResources = resourceList.concat(foundResources)

  if (root) {
    allResources.unshift('')
  }

  const absoluteResources = allResources.map(res => `${relativePath}/${res}`)

  if (verbose) {
    for (let res of absoluteResources) console.log(`Added '${res}' to be prefetched`)
  }

  const resources = absoluteResources.map(res => `    '${res}'`).join(',\n')
    
  const template =
`navigator.${global} = {
  prefetch: [
${resources}
  ]
}`

  fs.writeFileSync(path.join(outputDirectory, name), template)
}

generateConfig({ 
  outputDirectory: process.env.NODE_ENV === 'production' ? 'docs' : 'src',
  resourceList: list,
  resourcePatterns: patterns,
  verbose: true
})
