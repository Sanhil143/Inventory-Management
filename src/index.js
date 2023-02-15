const express = require('express')
const router = require('./routes/route')
require('./database/mysqlConnec')

const app = express()
app.use(express.json())


app.use('/', router)

app.listen(3000, () => {
      console.error("Express app running on port " + 3000);
})

