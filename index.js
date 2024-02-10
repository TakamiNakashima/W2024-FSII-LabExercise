const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/UserRoutes')

const app = express()
app.use(express.json())

//mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority
const DB_HOST = "fs1-f2023.pxy3izp.mongodb.net"
const DB_USER = "mialand1227"
const DB_PASSWORD = "12345"
const DB_NAME = "w2024_fs_labExer"

const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
})

app.use(userRouter)

app.listen(3000, () => { console.log('Server is running...') })