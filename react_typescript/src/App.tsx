import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState, increment, decrement, incrementByAmount } from "./index";

let a: string = "kim";

// let box: JSX.Element = <div></div>;

function App() {
  let [user, setUser] = useState<string | number>("kim");

  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button
        onClick={() => {
          // dispatch({ type: "증가" });
          dispatch(increment());
        }}
      >
        +버튼
      </button>
      <button
        onClick={() => {
          // dispatch({ type: "감소" });
          dispatch(decrement());
        }}
      >
        -버튼
      </button>

      <h4>Hello {a}</h4>
      <h4>Hello {user}</h4>
      <Profile name="asj" age="20" />
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}'s Profile</div>;
}

export default App;
