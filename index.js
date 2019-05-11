const express = require('express')
const aws = require('aws-sdk')
const app = express()

const port = process.env.PORT || 80

app.listen(port, '0.0.0.0', () => console.log(`App started, listening on port ${port}`))

app.get('/', (req, res) => {
  return res.json({ message: 'je to fajn!🇨🇿' })
})

app.get('/list-buckets', async (req, res) => {
  const s3 = new aws.S3()

  const buckets = await s3.listBuckets().promise()

  return res.json({ buckets })
})

app.get('/env', async (req, res) => {
  return res.json({ key: process.env.AWS_ACCESS_KEY_ID, region: process.env.AWS_REGION })
})
