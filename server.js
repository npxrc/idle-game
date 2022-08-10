const express = require(`express`)
const app = express()
const http = require(`http`)
const server = http.createServer(app)
const {Server} = require(`socket.io`)
const io = new Server(server)
app.get(`/`, (req, res) => {
  res.sendFile(__dirname + `/index.html`)
})
app.use(express.static(__dirname))
io.on(`connection`, socket => {
  console.log(`a user has connected`)
  socket.on(`upgraded`, (clicks, multiplier) => {
    console.log(`a user has upgraded and now has a multiplier of ${multiplier} and ${clicks} clicks`)
  })
})
server.listen(5500 || process.env.PORT, `0.0.0.0`, () => {
  console.log('listening')
})