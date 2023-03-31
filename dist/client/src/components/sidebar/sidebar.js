"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const categories_1 = __importDefault(require("../categories/categories"));
const Pricepicker_1 = __importDefault(require("../price-picker/Pricepicker"));
require("./sidebar.css");
const Sidebar = (props) => {
    return (react_1.default.createElement("div", { className: 'sidebar' },
        react_1.default.createElement("h2", { className: "sidebar__categories-title" }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"),
        react_1.default.createElement(categories_1.default, null),
        react_1.default.createElement(Pricepicker_1.default, null)));
};
exports.default = Sidebar;
