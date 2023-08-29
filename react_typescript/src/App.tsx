import React, { useState } from "react";

let a: string = "kim";

// let box: JSX.Element = <div></div>;

function App() {
  let [user, setUser] = useState<string | number>("kim");

  return (
    <div className="App">
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
