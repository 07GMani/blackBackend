const http = require('http')
const app = require('./app')
const { initSocket } = require("./sockets/queueSocket")

const server = http.createServer(app)
initSocket(server)

server.listen(3000, () => console.log('Server is active on PORT 3000'));

