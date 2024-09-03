const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // Disable the 'no-console' rule for the next line
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
