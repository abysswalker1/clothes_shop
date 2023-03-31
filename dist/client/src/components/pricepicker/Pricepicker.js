"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./pricepicker.css");
const core_1 = require("@material-ui/core");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Pricepicker = () => {
    const [range, setRange] = react_1.default.useState([20, 37]);
    return (<div className='price-picker'>
      <Typography_1.default id="range-slider" gutterBottom>
      Temperature range
    </Typography_1.default>
      <core_1.Slider value={range} 
    // onChange={handleChange}
    valueLabelDisplay="auto" aria-labelledby="range-slider"/>
    </div>);
};
exports.default = Pricepicker;
