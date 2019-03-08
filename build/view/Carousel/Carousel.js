"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Carousel.css");
exports.Carousel = function (_a) {
    var children = _a.children, handleChange = _a.handleChange, _b = _a.currentWindow, currentWindow = _b === void 0 ? 0 : _b;
    return React.createElement("section", { className: 'carousel center' },
        children.map(function (_, index) {
            return React.createElement("input", { key: index, type: 'radio', name: 'carousel', value: index, onChange: function () { return handleChange(index); } });
        }),
        children.map(function (child, index) {
            return index === currentWindow &&
                React.createElement("div", { key: index, className: 'window center' }, child);
        }));
};
//# sourceMappingURL=Carousel.js.map