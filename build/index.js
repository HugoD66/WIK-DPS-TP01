"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PING_LISTEN_PORT;
const route = 'ping';
const server = (0, node_http_1.createServer)((req, res) => {
    if (req.method !== 'GET' || req.url !== `/${route}`) {
        res.end();
    }
    else {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        const header = req.headers;
        const jsonResponse = JSON.stringify(header);
        res.end(jsonResponse);
    }
});
server.listen(port);
