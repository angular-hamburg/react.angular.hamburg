
// COPY VENDORS

const fs = require('fs-extra')

const copyDir = ({ from, to }) => {
  fs.ensureDirSync(to)
  fs.copy(from, to, err => {
    if (err) throw err
    else console.log(`Copying from '${from}' to '${to}'`)
  })
}

copyDir({ 
  from: 'node_modules/font-awesome', 
  to: 'src/vendors/font-awesome' 
})

copyDir({ 
  from: 'node_modules/font-awesome', 
  to: 'docs/vendors/font-awesome' 
})

// OPTIMIZE IMAGES

const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
 
imagemin(['src/media/*.{jpg,png}'], 'docs/media/', {
    plugins: [
        imageminMozjpeg({ quality: '80, 90' }),
        imageminPngquant({ quality: '80-90' })
    ]
}).then((files) => {
    for (let file of files)
      console.log(`Optimized ${file.path}`)
})
