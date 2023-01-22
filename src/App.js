import React, { Component } from "react";

import DisplayLanguage from "./DisplayLanguage";
import Welcome from "./Welcome";
import Sum from "./Sum";
import ClickCounter from "./ClickCounter";
import Login from "./Login";
import Counter from "./Counter";
import GithubUser from "./GithubUser";

const App = () => {
  const onCounterChange = (counter) => {
    console.log(`Current counter is ${counter}`);
  };
  return (
    <div>
      {/* <Login /> */}
      {/* <ClickCounter onCounterChange={onCounterChange} /> */}
      {/* <Counter /> */}
      <GithubUser name={"mgnkgn"} />
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
