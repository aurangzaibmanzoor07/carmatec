import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import GridLoader from "./components/Loader";
import TopBar from "./components/common/top_bar/TopBar";
import Navbar from "./components/common/navbar/Navbar";
const Home = lazy(() => import("./components/home/Home"));

const App = () => {
  return (
    <Suspense fallback={<GridLoader />}>
      <TopBar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default App;
