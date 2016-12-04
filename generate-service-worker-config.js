
const fs = require('fs')
const path = require('path')
const glob = require('glob-all')

// TODO: Publish as a new module on npm

const list = [
  '/',
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
  dir = 'src', 
  name = 'service-worker-config.js', 
  global = 'serviceWorkerConfig',
  resourceList = [], 
  resourcePatterns = []
} = {}) => {

  const foundResources = glob.sync(resourcePatterns, { cwd: dir, nodir: true })

  const resources = resourceList.concat(foundResources).map(res => `    '${res}'`).join(',\n')
    
  const template = 
`navigator.${global} = {
  prefetch: [
${resources}
  ]
}`

  fs.writeFileSync(path.join(dir, name), template)
}

generateConfig({ 
  resourceList: list, 
  resourcePatterns: patterns 
})
