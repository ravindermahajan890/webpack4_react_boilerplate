import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Example from "../Example/Example";
// import Gallery from "./test";
import "../../styles/index.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <div className="nav">
            <Link to="/Gallery">Gallery</Link>
            <Link to="/home">home</Link>
            <Link to="/Example">Example with react hooks</Link>
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
};
const Demo = lazy(() => import(/* webpackChunkName:"home" */ "../Demo/Demo"));
export default App;
