"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./header.css");
const headerMain_1 = __importDefault(require("./header-main/headerMain"));
const nav_1 = __importDefault(require("./nav/nav"));
const categories_1 = __importDefault(require("../categories/categories"));
const react_router_dom_1 = require("react-router-dom");
const Header = () => {
    const [expanded, setExpanded] = react_1.default.useState(false);
    const [openCategories, setOpenCategories] = react_1.default.useState(false);
    let location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        setExpanded(false);
    }, [location]);
    (0, react_1.useEffect)(() => {
        if (!expanded) {
            setOpenCategories(false);
        }
    }, [expanded]);
    const expandMobileMenu = (value) => {
        //@ts-ignore
        if (typeof value === Boolean) {
            setExpanded(value);
        }
        else
            setExpanded(!expanded);
    };
    const unwrapCategoriesMenu = () => {
        setOpenCategories(!openCategories);
    };
    return (react_1.default.createElement("header", { className: `header ${(openCategories) ? 'unwrapped' : ''}` },
        react_1.default.createElement(headerMain_1.default, { openMenu: expandMobileMenu }),
        react_1.default.createElement("div", { className: `mobile-menu ${(expanded) ? 'expanded' : ''}` },
            react_1.default.createElement("div", { className: "mobile-menu__nav" },
                react_1.default.createElement("div", { className: "mobile-menu__nav-container container" },
                    react_1.default.createElement(nav_1.default, { openCategories: unwrapCategoriesMenu, categoriesOpened: openCategories }))),
            react_1.default.createElement("div", { className: `mobile-menu__categories` },
                react_1.default.createElement(categories_1.default, null)))));
};
exports.default = Header;
