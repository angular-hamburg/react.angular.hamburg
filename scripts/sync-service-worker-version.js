
const fs = require('fs')
const path = require('path')

// TODO: Publish as a new module on npm

const syncServiceWorkerVersion = ({
  version = require(path.join(process.cwd(), 'package.json')).version,
  versionVariableName = 'VERSION',
  versionVariableSingleQuotes = true,
  serviceWorkerDirectory = process.cwd(),
  serviceWorkerFile = 'service-worker.js',
  verbose = false
} = {}) => {
  const filePath = path.join(serviceWorkerDirectory, serviceWorkerFile)
  const oldFile = fs.readFileSync(filePath).toString()
  const regExp = new RegExp(versionVariableName + `(\s?)=(\s?)('|")(.{5})('|")`, 'g')
  const quotes = versionVariableSingleQuotes ? `'` : `"`
  const newFile = oldFile.replace(regExp, `${versionVariableName} = ${quotes}${version}${quotes}`)
  if (verbose) console.log(`Trying to synchronize version '${version}' with '${filePath}' ...`)
  fs.writeFileSync(filePath, newFile)
  if (verbose) console.log(`... done.`)
}

syncServiceWorkerVersion({
  serviceWorkerDirectory: path.join(__dirname,
    process.env.NODE_ENV === 'production' ? '../docs' : '../src'),
  verbose: true
})
