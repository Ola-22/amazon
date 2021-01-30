import { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Component/Context/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
