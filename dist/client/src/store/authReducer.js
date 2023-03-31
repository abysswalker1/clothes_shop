"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerThunk = exports.setUserAuthAction = void 0;
const api_1 = require("./../api/api");
const action_types_1 = require("../action-types");
let initialState = {
    user: null
};
const authReducer = (state, action) => {
    switch (action.type) {
        case action_types_1.SET_USER_AUTH: {
            return { user: action.payload };
        }
        default: return state;
    }
};
const setUserAuthAction = (user) => ({ type: action_types_1.SET_USER_AUTH, payload: user });
exports.setUserAuthAction = setUserAuthAction;
const registerThunk = (email, password) => {
    (0, api_1.postRegisterApi)(email, password)
        .then(response => response.json())
        .then(response => console.log(response.body));
};
exports.registerThunk = registerThunk;
