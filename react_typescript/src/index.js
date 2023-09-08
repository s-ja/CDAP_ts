import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
const counterSlice = createSlice({
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
let store = configureStore({
    reducer: {
        counter1: counterSlice.reducer,
    },
});
//수정방법 만든거 export
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
