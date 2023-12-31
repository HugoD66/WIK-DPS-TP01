import { createServer } from 'node:http'
import {Server} from "net";
import {IncomingHttpHeaders, IncomingMessage, ServerResponse} from "http";
import dotenv from 'dotenv';
dotenv.config();

const port: string |undefined = process.env.PING_LISTEN_PORT;
const route: string = 'ping'

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method !== 'GET' || req.url !== `/${route}`) {
        res.end();
    } else {
        res.writeHead(200, {
            'Content-Type' : 'application/json'
        })
        const header: IncomingHttpHeaders = req.headers
        const jsonResponse = JSON.stringify(header);
        res.end(jsonResponse);
    }
})
server.listen(port)
