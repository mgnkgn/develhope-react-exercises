import React, { Component, useContext } from "react";
import { Route, Routes, useParams, Link } from "react-router-dom";

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
import CarDetails from "./CarDetails";
import { LanguageCtxProvider } from "./LanguageCtx";
import DisplayLangFunc from "./DisplayLangFunc";
import FilteredList from "./FilteredList";
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";

const App = () => {
  const { username } = useParams();
  const { count, decrementCount, incrementCount, resetCount } = UseCounter();

  const arrayToBeFiltered = [
    { name: "Mauro", id: 99, age: 29 },
    { name: "Dries", id: 10, age: 35 },
    { name: "Fernando", id: 1, age: 34 },
    { name: "Christine", id: 110, age: 33 },
    { name: "Ciro", id: 1100, age: 7 },
    { name: "Leo", id: 30, age: 18 },
  ];

  return (
    <LanguageCtxProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <nav
              style={{
                display: "flex",
                width: "350px",
                justifyContent: "space-around",
              }}
            >
              <Link to="/welcome">Welcome Page</Link>
              <Link to="/counter">Counter Page</Link>
              <Link to="/users/mgnkgn">Github Profile</Link>
            </nav>
          }
        />

        <Route
          path="/people"
          element={<FilteredList people={arrayToBeFiltered} />}
        />
        <Route path="/welcome" element={<Welcome name={"Mauro"} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users" element={<GithubUsersList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* <Login /> */}
        {/* <ClickCounter onCounterChange={onCounterChange} /> */}
        {/* <Counter /> */}
        {/* <GithubUser name={"mgnkgn"} /> */}
        {/* <GithubUsersList /> */}
        {/* <div>
          Current count: {count} / <button onClick={incrementCount}>+</button> /
          <button onClick={decrementCount}>-</button> /
          <button onClick={resetCount}>Reset</button>
        </div> */}
        {/* <Form /> */}
        {/* <CarDetails /> */}
        {/* <DisplayLangFunc /> */}
      </Routes>
    </LanguageCtxProvider>
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
