const express = require(`express`)
const app = express()
const http = require(`http`)
const server = http.createServer(app)
const {Server} = require(`socket.io`)
const io = new Server(server)
app.get(`/`, (req, res) => {
  res.sendFile(__dirname + `/index.html`)
}); app.use(express.static(__dirname))
io.on(`connection`, socket => {
  socket.on(`connected`, id => {
    console.log(`${id} has connected`)
    socket.on(`upgraded`, (clicks, multiplier) => {
      console.log(`${id} has upgraded and now has a multiplier of ${multiplier} and ${clicks} clicks`)
    })
    socket.on(`disconnect`, () => {
      console.log(`${id} has disconnected`)
    })
  })
}); server.listen(process.env.PORT || 5500, `0.0.0.0`, () => {
  console.log('listening')
})