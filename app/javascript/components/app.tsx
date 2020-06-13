import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HelloWorld from './hello-world';
import configureStore from '../store';
import Main from './main';

const store = configureStore();

const App: React.FunctionComponent = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={ () => <Main /> }
        />
        <Route
          exact
          path='/hello'
          render={ () => <HelloWorld greeting='hola' /> }
        />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
