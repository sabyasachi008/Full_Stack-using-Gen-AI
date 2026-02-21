const express = require("express");

const app = express();
const PORT = 8000;

const http = require('http');
const { WebSocketServer } = require("ws");

const server = http.createServer((req, res)=>{

    if(req.headers['upgrade'] !== 'websocket') {
        fs.readFile('./index.html', (err, data)=> {
            if(err) {
                res.writeHead(404);
                res.end("File not found");
                return;
            }

            res.writeHead(200, {'Content-Type':'text/html'});

            res.end(data);
        })
    }
})

const wss = new WebSocketServer({ server });

wss.on('connection', (socket)=>{
    console.log("CONNECTED");

    socket.on('message', (data)=> {
        console.log(`Recieved: ${data.toString()}`);
        socket.send("pong");
    });

    socket.on('close', ()=> console.log("DISCONNECTED"));

    socket.on('error', (error)=> console.error("Error:", error));
});


server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
    