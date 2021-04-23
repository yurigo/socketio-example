# Socket.io Example

Este proyecto consta de cliente y servidor.

Se utiliza la librería socket.io para implementar una comunicación realtime con el servidor.  Implementará WebSocket con exploradores modernos y polling para exploradores que no lo soporten (fallback).

Beneficios al utilizar Socket.io sobre WebSocket.

- Nos proporciona fallback en el caso de que WebSocket no esté soportado por el explorador.
- Reconexión en caso de errores.
- Multiplexación de mensajes (rooms).
- Los mensajes se codifican según eventos.

<br>

## Para ejecutar el servidor

Entramos en la carpeta del servidor
```
cd server
```

Instalamos las dependencias
```
npm i
```

Ejecutamos el servidor
```
npm start
```

<br>

## Para ejecutar el cliente

Para servir el cliente se puede utilizar una extensión de visual studio code: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). que levanta un servidor en, con los valores por defecto, `localhost:5500`. 
