import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import Sidebar from './component/sidenav';

const App = props => {
  return (
    <>
      <BrowserRouter>
      <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default injectContext(App);
