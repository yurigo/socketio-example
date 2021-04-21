const http = require("http").createServer();
const io = require("socket.io")(http, {
    cors: { origin: "*" },
});

let usersConnected = 0;

// escuchar conexiones
io.on("connection", (socket) => {
    usersConnected++;

    // escuchar mensaje
    socket.on("message", (message) => {
        io.emit("message", {
            username: socket.username,
            message: message,
        });
    });

    // evento para saber quien es el username del socket abierto y emite el
    // username y usersConnected
    socket.on("iam", (username) => {
        socket.broadcast.emit("usuario conectado", {
            username,
            usersConnected,
        });
        socket.username = username;
        socket.emit("numero de usuarios", usersConnected);
    });

    // detecta la desconexión y emite un evento al cliente con el username desconectado
    socket.on("disconnect", () => {
        usersConnected--;
        socket.broadcast.emit("usuario desconectado", {
            username: socket.username,
            usersConnected: usersConnected,
        });
    });
});

http.listen(4000, () => console.log("websocket en puerto 4000"));
