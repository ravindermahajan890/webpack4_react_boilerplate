import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Example from "./Example";
// import Gallery from "./test";
import "../styles/index.scss";
const App = () => (
  <BrowserRouter>
    <div>
      <div>
        <div className="nav">
          <Link className="nav nav__link" to="/Gallery">
            Gallery
          </Link>
          <Link className="nav nav__link" to="/home">
            home
          </Link>
          <Link className="nav nav__link" to="/Example">
            Example with react hooks
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/home" component={Demo} />
            <Route path="/example" component={Example} />
          </Switch>
        </Suspense>
      </div>
    </div>
  </BrowserRouter>
);
const Demo = lazy(() =>
  import(/* webpackChunkName:"home" */ "../components/Demo")
);
export default App;
