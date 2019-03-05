"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PathReporter_1 = require("io-ts/lib/PathReporter");
var types_1 = require("./types");
exports.clientConnector = function (socket) { return function (fn) {
    return socket.onmessage = function (_a) {
        var data = _a.data;
        return fn(types_1.ValidateDataResponse.decode(JSON.parse(data))
            .getOrElseL(function (errors) {
            throw new Error(PathReporter_1.failure(errors).join('\n'));
        }));
    };
}; };
//# sourceMappingURL=clientConnector.js.map