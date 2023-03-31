"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const bcrypt = require('bcryptjs');
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'clothes_shop_bd',
    password: 'p.ufaf',
    port: 5432,
});
// define a function to register a new user
function registerUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt.genSalt(10);
        const hashedPassword = password;
        const query = {
            text: `INSERT INTO users (email, password) VALUES ($1, $2)`,
            values: [email, hashedPassword]
        };
        const result = yield pool.query(query);
        return result.rows[0].id;
    });
}
exports.registerUser = registerUser;
