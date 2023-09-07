<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./index";
let a = "kim";
// let box: JSX.Element = <div></div>;
function App() {
    let [user, setUser] = useState("kim");
    const 꺼내온거 = useSelector((state) => state);
    const dispatch = useDispatch();
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
let a = "kim";
// let box: JSX.Element = <div></div>;
function App() {
    let [user, setUser] = (0, react_1.useState)("kim");
    const 꺼내온거 = (0, react_redux_1.useSelector)((state) => state);
    const dispatch = (0, react_redux_1.useDispatch)();
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
    return (<div className="App">
      {꺼내온거.counter1.count}
      <button onClick={() => {
            // dispatch({ type: "증가" });
<<<<<<< HEAD
            dispatch(increment());
=======
            dispatch((0, index_1.increment)());
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
        }}>
        +버튼
      </button>
      <button onClick={() => {
            // dispatch({ type: "감소" });
<<<<<<< HEAD
            dispatch(decrement());
=======
            dispatch((0, index_1.decrement)());
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
        }}>
        -버튼
      </button>

      <h4>Hello {a}</h4>
      <h4>Hello {user}</h4>
      <Profile name="asj" age="20"/>
    </div>);
}
function Profile(props) {
    return <div>{props.name}'s Profile</div>;
}
<<<<<<< HEAD
export default App;
=======
exports.default = App;
>>>>>>> 638ed9a3d2223b969178b05f63290d79c3089721
