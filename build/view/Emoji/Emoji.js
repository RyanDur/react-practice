"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Emoji = function (props) { return (React.createElement("span", { className: 'emoji', role: 'img', "aria-label": props.label ? props.label : '', "aria-hidden": props.label ? 'false' : 'true' }, props.symbol)); };
//# sourceMappingURL=Emoji.js.map