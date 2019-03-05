"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Emoji_1 = require("../../Emoji");
exports.cats = [
    React.createElement(Emoji_1.Emoji, { key: '😾', label: 'pouting cat', symbol: '😾' }),
    React.createElement(Emoji_1.Emoji, { key: '🙀', label: 'weary cat', symbol: '🙀' }),
    React.createElement(Emoji_1.Emoji, { key: '😿', label: 'crying cat', symbol: '😿' }),
    React.createElement(Emoji_1.Emoji, { key: '😽', label: 'kissing cat', symbol: '😽' }),
    React.createElement(Emoji_1.Emoji, { key: '😼', label: 'cat with wry smile', symbol: '😼' }),
    React.createElement(Emoji_1.Emoji, { key: '😺', label: 'grinning cat', symbol: '😺' }),
    React.createElement(Emoji_1.Emoji, { key: '😸', label: 'grinning cat with smiling eyes', symbol: '😸' }),
    React.createElement(Emoji_1.Emoji, { key: '😹', label: 'cat with tears of joy', symbol: '😹' }),
    React.createElement(Emoji_1.Emoji, { key: '😻', label: 'smiling cat with heart-eyes', symbol: '😻' })
];
exports.catFormatter = function (cat) {
    if (cat > 9)
        return cat;
    return exports.cats[cat] || '—';
};
//# sourceMappingURL=cats.js.map
