const http = require('http')
const app = require('./app')
const { initSocket } = require("./sockets/queueSocket")

const server = http.createServer(app)
initSocket(server)

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is active on PORT ${PORT}`);
});

