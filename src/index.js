import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
// import Gallery from "./test";
import "./styles/index.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <div className="nav">
            <Link to="/Gallery">Gallery</Link>
            <Link to="/home">home</Link>
            <Link to="/Gallery">Article</Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/home" component={Demo} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};
const Demo = lazy(() =>
  import(/* webpackChunkName:"home" */ "./components/Demo/Demo")
);

ReactDOM.render(<App />, document.querySelector("#root"));
