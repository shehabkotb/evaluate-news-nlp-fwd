const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
const FormData = require('form-data')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

const meaningCloudApiKey = process.env.API_KEY
const apiURL = 'https://api.meaningcloud.com/sentiment-2.1'

console.log(__dirname)

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

app.post('/analyze', function (req, res) {
  const formdata = new FormData()
  formdata.append('key', meaningCloudApiKey)
  formdata.append('url', apiURL)
  formdata.append('lang', 'en')

  const requestOptions = {
    method: 'POST',
    redirect: 'follow',
    body: formdata
  }

  fetch(apiURL, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result)
      return res.json(result)
    })
    .catch((error) => console.log(error))
})
