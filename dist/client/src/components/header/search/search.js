"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_final_form_1 = require("react-final-form");
const react_redux_1 = require("react-redux");
require("./search.css");
const Search = (props) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const onSubmit = (values) => {
        if (values.search)
            navigate(`/products?title=${values.search}`);
    };
    return (react_1.default.createElement(react_final_form_1.Form, { onSubmit: onSubmit, render: ({ handleSubmit }) => (react_1.default.createElement("form", { onSubmit: handleSubmit, className: "search" },
            react_1.default.createElement(react_final_form_1.Field, { component: "input", type: "text", className: 'search-input active', name: 'search' }),
            react_1.default.createElement("button", { className: "search-btn", type: 'submit' },
                react_1.default.createElement("i", { className: "bi bi-search" })))) }));
};
exports.default = (0, react_redux_1.connect)(null)(Search);
