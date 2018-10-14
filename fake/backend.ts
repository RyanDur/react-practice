import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import {Server} from 'http';
import {Express} from 'express';
import {createRow} from './data';

const app: Express = express();
const server: Server = http.createServer(app);
const wss: WebSocket.Server = new WebSocket.Server({server});

const names: string[] = ['Anna', 'Travis', 'Mendel', 'Harrison', 'Alex', 'Jordan', 'Mike', 'Krishna', 'Mohammad', 'Paulina'];

wss.on('connection', (socket: WebSocket) => {
  socket.send(JSON.stringify({connection: "ok"}));
  socket.send(JSON.stringify(`{data: ${JSON.stringify(names.map(createRow))}}`));
});

module.exports =  server;
