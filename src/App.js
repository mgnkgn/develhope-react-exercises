import React, { Component } from "react";

import DisplayLanguage from "./DisplayLanguage";
import Welcome from "./Welcome";
import Sum from "./Sum";
import ClickCounter from "./ClickCounter";
import Login from "./Login";
import Counter from "./Counter";
import GithubUser from "./GithubUser";
import GithubUsersList from "./GithubUsersList";
import UseCounter from "./UseCounter";
import Form from "./Form";

const App = () => {
  const onCounterChange = (counter) => {
    console.log(`Current counter is ${counter}`);
  };

  const { count, decrementCount, incrementCount, resetCount } = UseCounter();
  return (
    <div>
      {/* <Login /> */}
      {/* <ClickCounter onCounterChange={onCounterChange} /> */}
      {/* <Counter /> */}
      {/* <GithubUser name={"mgnkgn"} /> */}
      {/* <GithubUsersList /> */}
      <div>
        Current count: {count} / <button onClick={incrementCount}>+</button> /
        <button onClick={decrementCount}>-</button> /
        <button onClick={resetCount}>Reset</button>
      </div>
      <Form />
    </div>
  );
};

export default App;

// export default class App extends Component {
//   loginHandler(event) {
//     event.preventDefault();
//     console.log("Login successful.");
//   }
//   renderHandler(array, removeFnc) {
//     return array.map((item) => (
//       <li key={item.id}>
//         {item.value}
//         <button id={item.id} onClick={removeFnc.bind(this, item.id)}>
//           Remove Todo
//         </button>
//       </li>
//     ));
//   }
//   numbersArray = [1, 2, 3, 4, 5];
//   render() {
//     return (
//       <div>
//         {/* <TodoList render={this.renderHandler} /> */}
//         {/* <DisplayLanguage /> */}
//         <Welcome name={"Mauro"} />
//         {/* <Sum /> */}
//         {/* <ClickCounter /> */}
//         {/* <Login /> */}
//       </div>
//     );
//   }
// }
