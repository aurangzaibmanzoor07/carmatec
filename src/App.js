import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import GridLoader from "./components/Loader";
const Home = lazy(() => import("./components/home/Home"));

const App = () => {
  return (
    <Suspense fallback={<GridLoader />}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default App;
