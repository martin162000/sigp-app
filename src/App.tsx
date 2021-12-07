import React from 'react';
import { Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout } from 'antd';


import Headerbar from './Components/Headerbar';
import Footerbar from './Components/Footerbar';
import Movies from './Views/Movies';
import Details from './Views/Details';
import Favourites from './Views/Favourites';

function App() {
  return (
    <>


  <Layout className="layout">
            <Headerbar/>

            <Switch>
              <Route path="/movies" component={Movies} />
              <Route path="/details" component={Details} />
              <Route path="/favourites" component={Favourites} />
           </Switch>  
      
            <Footerbar/>
    </Layout>

    </>
  );
}

export default App;
