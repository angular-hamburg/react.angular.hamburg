
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

copyDir({ 
  from: 'src/media', 
  to: 'docs/media'
})
