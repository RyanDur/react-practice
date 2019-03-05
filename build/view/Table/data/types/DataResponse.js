"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var t = require("io-ts");
var ValidateDataNumber = t.record(t.string, t.number);
var ValidateDataName = t.interface({
    name: t.union([t.string, t.undefined])
});
exports.ValidateResponse = t.type({
    data: t.array(t.union([ValidateDataName, ValidateDataNumber, t.undefined])),
    rowNames: t.union([t.array(t.string), t.undefined]),
    columnNames: t.union([t.array(t.string), t.undefined])
});
//# sourceMappingURL=DataResponse.js.map