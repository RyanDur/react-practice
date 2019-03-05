"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
var ValidateData = t.union([
    t.interface({ name: t.string }),
    t.record(t.string, t.number)
]);
exports.ValidateDataResponse = t.type({
    data: t.array(ValidateData),
    rowNames: t.array(t.string),
    columnNames: t.array(t.string)
});
//# sourceMappingURL=DataResponse.js.map