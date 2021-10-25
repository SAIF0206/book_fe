import Book from "./component/Book";
import BookDetail from "./component/BookDetail";
import NotFound from "./component/NotFound";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/book" || location.pathname === "/not-found" ? (
        <Navbar />
      ) : null}
      <Switch>
        <Route path="/bookDetail/:title" component={BookDetail} />
        <Route path="/book" component={Book} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/book" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
