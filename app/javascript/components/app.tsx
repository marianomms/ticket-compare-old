import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import HelloWorld from './hello-world';
import configureStore from '../store';

const store = configureStore();

const App: React.FunctionComponent = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={ () => ('soy el home!!!') } />
        <Route exact path='/hello' render={ () => <HelloWorld greeting='hola' /> } />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
