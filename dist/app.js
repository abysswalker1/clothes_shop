"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./routes/products"));
const auth_1 = __importDefault(require("./routes/auth"));
const cors = require('cors');
const app = (0, express_1.default)();
const productsRouter = (0, products_1.default)();
const auth = (0, auth_1.default)();
const middleWare = express_1.default.json();
app.use(middleWare);
app.use(cors());
app.use('/products', productsRouter);
app.use('/auth', auth);
exports.default = app;
