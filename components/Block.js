"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
require("./Block.css");
var Footer = function (_a) {
    var itemCount = _a.itemCount, filter = _a.filter, setFilter = _a.setFilter, clearCompleted = _a.clearCompleted;
    return (react_1["default"].createElement("div", { className: 'footer' },
        react_1["default"].createElement("span", { style: { background: '#f3f3f3' } },
            react_1["default"].createElement("div", { className: 'itemCount' },
                itemCount,
                " items left")),
        react_1["default"].createElement("span", { style: { background: '#f3f3f3' } },
            react_1["default"].createElement("button", { onClick: function () { return setFilter('all'); }, className: filter === 'all' ? 'all' : '' }, "All"),
            react_1["default"].createElement("button", { onClick: function () { return setFilter('active'); }, className: filter === 'active' ? 'active' : '' }, "Active"),
            react_1["default"].createElement("button", { onClick: function () { return setFilter('completed'); }, className: filter === 'completed' ? 'completed' : '' }, "Completed")),
        react_1["default"].createElement("button", { onClick: clearCompleted, className: 'clear' }, "Clear completed")));
};
var ItemList = function (_a) {
    var todo = _a.todo, onToggle = _a.onToggle;
    return (react_1["default"].createElement("div", { className: 'itemList' },
        react_1["default"].createElement("label", { className: 'item' },
            react_1["default"].createElement("input", { type: 'checkbox', checked: todo.completed, onChange: onToggle }),
            react_1["default"].createElement("div", { className: 'checkbox' }),
            react_1["default"].createElement("div", { style: { textDecoration: todo.completed ? 'line-through' : 'none' }, className: 'itemText' }, todo.text))));
};
var Block = function () {
    var _a = (0, react_1.useState)([]), todos = _a[0], setTodos = _a[1];
    var _b = (0, react_1.useState)(''), inputValue = _b[0], setInputValue = _b[1];
    var _c = (0, react_1.useState)('all'), filter = _c[0], setFilter = _c[1];
    var addTask = function () {
        var newTask = { text: inputValue, completed: false };
        setTodos(__spreadArray(__spreadArray([], todos, true), [newTask], false));
        setInputValue('');
    };
    var toggleItem = function (index) {
        var updatedItem = todos.map(function (todo, i) {
            return i === index ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
        });
        setTodos(updatedItem);
    };
    var filteredList = function () {
        switch (filter) {
            case 'active':
                return todos.filter(function (todo) { return !todo.completed; });
            case 'completed':
                return todos.filter(function (todo) { return todo.completed; });
            default:
                return todos;
        }
    };
    var clearList = function () {
        setTodos(todos.filter(function (todo) { return !todo.completed; }));
    };
    return (react_1["default"].createElement("div", { className: 'mainBlock' },
        react_1["default"].createElement("input", { type: 'text', placeholder: 'what you need to do?', value: inputValue, onChange: function (e) { return setInputValue(e.target.value); }, onKeyDown: function (e) { if (e.key === 'Enter')
                addTask(); } }),
        filteredList().length > 0 && (react_1["default"].createElement("div", null, filteredList().map(function (todo, index) { return (react_1["default"].createElement(ItemList, { key: index, todo: todo, onToggle: function () { return toggleItem(index); } })); }))),
        react_1["default"].createElement(Footer, { itemCount: filteredList().length, filter: filter, setFilter: setFilter, clearCompleted: clearList })));
};
exports["default"] = Block;
//# sourceMappingURL=Block.js.map