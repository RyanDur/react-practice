"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Carousel = function (_a) {
    var children = _a.children;
    return React.createElement("section", { className: 'carousel' }, children.map(function (child) { return React.createElement("div", { key: child.toString(), className: 'window' }, child); }));
};
//# sourceMappingURL=Carousel.js.map