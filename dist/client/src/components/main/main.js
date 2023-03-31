"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./main.css");
const Main = (props) => {
    return (react_1.default.createElement("div", { className: 'main container' },
        react_1.default.createElement(react_1.default.Fragment, null, props.children)));
};
exports.default = Main;