const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('chat message', ({ nickname, msg }) => {
    io.emit('chat message', { nickname, msg })
  })
})
const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`))
