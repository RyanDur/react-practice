"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var react_redux_1 = require("react-redux");
var view_1 = require("./view");
require("./index.css");
var store_1 = require("./store");
ReactDom.render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(view_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map