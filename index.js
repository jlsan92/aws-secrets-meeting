const express = require('express')
const app = express()

const port = process.env.PORT || 80

app.listen(port, '0.0.0.0', () => console.log(`App started, listening on port ${port}`))

app.get('/', (req, res) => {
  return res.json({ message: 'je to fajn!🇨🇿' })
})
