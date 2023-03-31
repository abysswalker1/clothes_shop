"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./categoryLink.css");
const react_router_dom_1 = require("react-router-dom");
const CaltegoryLink = (props) => {
    return (react_1.default.createElement("div", { className: 'category-link' },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/products/category/${props.category}` }, props.category)));
};
exports.default = CaltegoryLink;
