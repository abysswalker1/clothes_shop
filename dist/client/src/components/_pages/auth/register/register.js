"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./register.css");
const react_final_form_1 = require("react-final-form");
const authReducer_1 = require("../../../../store/authReducer");
const Register = () => {
    const onSubmit = (values) => {
        if (values.email && values.password) {
            (0, authReducer_1.registerThunk)(values.email, values.password);
        }
    };
    return (react_1.default.createElement("div", { className: 'register' },
        react_1.default.createElement("h1", { className: "register-title" }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C"),
        react_1.default.createElement(react_final_form_1.Form, { onSubmit: onSubmit, render: ({ handleSubmit, form, values }) => (react_1.default.createElement("form", { className: 'register__form', onSubmit: handleSubmit },
                react_1.default.createElement("div", { className: "register__email" },
                    react_1.default.createElement("label", { htmlFor: "email" }, "\u0412\u0430\u0448 email"),
                    react_1.default.createElement("div", { className: "std-input-wrap" },
                        react_1.default.createElement(react_final_form_1.Field, { name: 'email', component: 'input', type: 'text' }))),
                react_1.default.createElement("div", { className: "register__password" },
                    react_1.default.createElement("label", { htmlFor: "password" }, "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C"),
                    react_1.default.createElement("div", { className: "std-input-wrap" },
                        react_1.default.createElement(react_final_form_1.Field, { name: 'password', component: 'input', type: 'password' }))),
                react_1.default.createElement("button", { type: 'submit' }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))) })));
};
exports.default = Register;
