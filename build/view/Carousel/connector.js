"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Carousel_1 = require("./Carousel");
var carouselAction;
(function (carouselAction) {
    carouselAction["CHANGE_PAGE"] = "CHANGE_WINDOW";
})(carouselAction || (carouselAction = {}));
react_redux_1.connect(function (state) { return ({
    currentPage: 0
}); }, function (dispatch) { return ({
    changePage: function (window) { return dispatch({ type: carouselAction.CHANGE_WINDOW, window: window }); }
}); })(Carousel_1.Carousel);
//# sourceMappingURL=connector.js.map
