const express = require('express')
const app = express()


app.use(express.json())

app.use("/products", require('./productRouter'))

app.listen(9000, () => console.log('The server is running on PORT 9000'))