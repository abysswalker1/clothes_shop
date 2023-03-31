"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./footer.css");
const Footer = () => {
    return (react_1.default.createElement("footer", { className: 'footer' },
        react_1.default.createElement("div", { className: "footer-container container" },
            react_1.default.createElement("div", { className: "footer__column" },
                react_1.default.createElement("h2", { className: "footer__column-title" }, "\u041E \u043D\u0430\u0441")),
            react_1.default.createElement("div", { className: "footer__column" },
                react_1.default.createElement("h2", { className: "footer__column-title" }, "\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F\u043C")))));
};
exports.default = Footer;
