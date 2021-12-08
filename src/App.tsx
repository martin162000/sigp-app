import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";

import Headerbar from "./Components/Headerbar";
import Footerbar from "./Components/Footerbar";
import Movies from "./Views/Movies";
import Details from "./Views/Details";
import Favourites from "./Views/Favourites";
import { useDispatch } from "react-redux";

function App() {
  // GET DATA FROM LOCAL STORAGE
  const savedFavourites:any = localStorage.getItem("StorageFavourites");
  const parsedData = JSON.parse(savedFavourites)
  const dispatch = useDispatch();
  const dispFunction = (typ: string, data: any) => {
    dispatch({ type: typ, data: data });
  };

  // POST DATA FROM LOCAL STORAGE TO REDUX
  useEffect(() => {
    if(parsedData) {
    dispFunction("SET_FAVOURITES", parsedData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Layout className="layout fadeIn">
        <Headerbar />

        <Switch>

          <Route exact path="/">
              <Redirect to="/movies" />
          </Route>

          <Route path="/movies" component={Movies} />
          <Route path="/details" component={Details} />
          <Route path="/favourites" component={Favourites} />
        </Switch>

        <Footerbar />
      </Layout>
    </>
  );
}

export default App;
