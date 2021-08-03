import express from 'express';
import index from './Routes';

const PORT = process.env.PORT || 9000;


const server = express();
function displayServerMessage() {
    return console.log('My Diary API server is listening on Port ' + PORT);
}
server.use(index);
server.listen(PORT, displayServerMessage);


export default server;