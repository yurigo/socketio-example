let text = document.querySelector("#chat");
let sendButton = document.querySelector("#sendButton");
let textMessage = document.querySelector("#textMessage");

let usersConnected = document.getElementById("counter");

const urlParams = new URLSearchParams(window.location.search);

const socket = io("ws://localhost:4000");

socket.on("message", (data) => {
    const d = document.createElement("div");
    const t = document.createTextNode(data.username + ": " + data.message);
    d.appendChild(t);
    text.appendChild(d);
});

socket.on("usuario conectado", (data) => {
    const d = document.createElement("div");
    d.classList.add("joined");
    const t = document.createTextNode(
        "El usuario " + data.username + " se ha conectado"
    );
    d.appendChild(t);
    text.appendChild(d);

    usersConnected.innerText = data.usersConnected;
});

socket.on("usuario desconectado", (data) => {
    console.log(data);
    const d = document.createElement("div");
    d.classList.add("joined");
    const t = document.createTextNode(
        "El usuario " + data.username + " se ha desconectado!"
    );
    d.appendChild(t);
    text.appendChild(d);

    usersConnected.innerText = data.usersConnected;
});

socket.on("connect", () => {
    socket.emit("iam", urlParams.get("user"));
});

socket.on("numero de usuarios", (data) => {
    usersConnected.innerText = data;
});

sendButton.onclick = () => {
    socket.emit("message", textMessage.value);
};
