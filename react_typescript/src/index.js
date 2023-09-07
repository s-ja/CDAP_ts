<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
=======
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementByAmount = exports.decrement = exports.increment = void 0;
const react_1 = require("react");
const client_1 = require("react-dom/client");
const react_redux_1 = require("react-redux");
const toolkit_1 = require("@reduxjs/toolkit");
const App_1 = require("./App");
const reportWebVitals_1 = require("./reportWebVitals");
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
const 초기값 = { count: 0, user: "kim" };
// function reducer(state = 초기값, action: { type: string }): Counter {
//   if (action.type === "증가") {
//     return { count: state.count + 1 };
//   } else if (action.type === "감소") {
//     return { count: state.count - 1 };
//   } else {
//     return 초기값;
//   }
// }
// const store = createStore(reducer);
<<<<<<< HEAD
const counterSlice = createSlice({
=======
const counterSlice = (0, toolkit_1.createSlice)({
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
    name: "counter",
    initialState: 초기값,
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        incrementByAmount(state, action) {
            state.count += action.payload;
        },
    },
});
<<<<<<< HEAD
let store = configureStore({
=======
let store = (0, toolkit_1.configureStore)({
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
    reducer: {
        counter1: counterSlice.reducer,
    },
});
//수정방법 만든거 export
<<<<<<< HEAD
export let { increment, decrement, incrementByAmount } = counterSlice.actions;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
_a = counterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
