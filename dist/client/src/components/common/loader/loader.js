"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./loader.css");
const Loader = () => {
    return (react_1.default.createElement("div", { className: 'loader' },
        react_1.default.createElement("div", { id: "loading-bar-spinner", className: "spinner" },
            react_1.default.createElement("div", { className: "spinner-icon" }))));
};
exports.default = Loader;
