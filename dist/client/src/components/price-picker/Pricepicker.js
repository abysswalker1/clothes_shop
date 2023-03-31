"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./pricepicker.css");
const productsReducer_1 = require("../../store/productsReducer");
const core_1 = require("@material-ui/core");
const react_redux_1 = require("react-redux");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Pricepicker = (props) => {
    const [range, setRange] = react_1.default.useState([10, 80]);
    const handleChange = (event, newValue) => {
        setRange(newValue);
    };
    return (react_1.default.createElement("div", { className: 'price-picker' },
        react_1.default.createElement(core_1.Slider, { value: range, onChange: handleChange, valueLabelDisplay: "auto", min: props.totalPrice.minimumPrice, max: props.totalPrice.maximumPrice }),
        react_1.default.createElement("div", { className: "price-picker__buttons" },
            react_1.default.createElement(Button_1.default, { onClick: () => props.setPriceRangeAction(range) }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"),
            props.priceRange &&
                react_1.default.createElement(Button_1.default, { onClick: () => props.setPriceRangeAction(null), className: 'clear-range-button' }, "\u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C"))));
};
exports.default = (0, react_redux_1.connect)((state) => ({
    totalPrice: state.products.totalPrice,
    priceRange: state.products.priceRange
}), { setPriceRangeAction: productsReducer_1.setPriceRangeAction })(Pricepicker);
