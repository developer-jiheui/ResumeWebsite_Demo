const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://developerjiheuilee:mydb_connection@cluster0.7a6srwr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB 연결 성공..."))
  .catch((err) => console.log(err));