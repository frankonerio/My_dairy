import express from 'express';
import index from './Routes';

const server = express();
function displayServerMessage() {
    return console.log('My Diary API server is listening on Port 8888');
}
server.use(index);
const PORT = process.env.PORT || 9000;
server.listen(PORT, displayServerMessage);

export default server;