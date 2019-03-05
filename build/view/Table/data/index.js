"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientConnector_1 = require("./clientConnector");
var middleware_1 = require("./middleware");
var reducer_1 = require("./reducer");
exports.data = reducer_1.reducer;
exports.middleware = middleware_1.socketMiddleware(clientConnector_1.clientConnector(new WebSocket('ws://localhost:8999')));
//# sourceMappingURL=index.js.map