const { func } = require("joi")
const socketIo = require("socket.io")

function initSocket(server) {
    const io = socketIo(server, {
        cors: { origin: "*" }
    });

    global.io = io

    io.on("connection", (socket) => {
        console.log("Client Connection Done");
    })
}

module.exports = { initSocket }