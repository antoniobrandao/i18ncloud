var axios = require('axios')
var fs = require('fs')
var path = require('path')
var config = require(path.resolve(process.cwd(), 'i18ncloudConfig.js'))

if (config) {
  var processDownload = function() {
    let failed = false
    if (!config.user_id) {
      console.log('config file requires a "user_id" field')
      failed = true
    }
    if (!config.secret_key) {
      console.log('config file requires a "secret_key" field')
      failed = true
    }
    if (!config.files_path) {
      console.log('config file requires a "files_path" field')
      failed = true
    }
    if (failed) {
      return;
    }
    const loadUrl = 'http://localhost:3000/api/feed/' + config.user_id + '/' + config.secret_key
    var savePath = path.resolve(process.cwd(), String(config.files_path))
    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath)
    }
    return axios.get(loadUrl)
    .then((res) => {
      fs.writeFile(savePath + '/i18n.json', JSON.stringify(res.data, null, 2), (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("File has been created")
      })
    })
  }
  processDownload()
} else {
  console.log('i18n.cloud: config file not found.')
  console.log('Please create a i18ncloudConfig.js file in the root of your project.')
  console.log('Instructions at http://i18n.cloud/docs')
}