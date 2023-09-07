import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./index";
let a = "kim";
// let box: JSX.Element = <div></div>;
function App() {
    let [user, setUser] = useState("kim");
    const 꺼내온거 = useSelector((state) => state);
    const dispatch = useDispatch();
    return (<div className="App">
      {꺼내온거.counter1.count}
      <button onClick={() => {
            // dispatch({ type: "증가" });
            dispatch(increment());
        }}>
        +버튼
      </button>
      <button onClick={() => {
            // dispatch({ type: "감소" });
            dispatch(decrement());
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
export default App;
