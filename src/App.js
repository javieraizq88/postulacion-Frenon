import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import Sidebar from './component/sidenav';
import Notificaciones from './views/notificaciones';
import Resultados from './views/resultados';

const App = props => {
  return (
    <>
      <BrowserRouter>
      <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notificaciones" component={Notificaciones} />
          <Route exact path="/buscar" component={Resultados} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default injectContext(App);
