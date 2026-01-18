const express = require('express');

const http = require('http');

const socketIO = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

const { redisClient, getAsync } = require('./redis');
const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('A client connected.');

    socket.on('get:data', async()=> {
        const data = await getDataFromMongoDB();

        socket.emit('data', data);
    });

    socket.on('disconnect', ()=> {
        console.log('A client disconnected.');
    });
});


async function getDataFromMongoDB() {
    //Fetch data from MongoDB
    
    const data = await YourModel.find();

    //store the data in Redis for Caching
    redisClient.set('data', JSON.stringify(data));

    return data;
}

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}..`);
})