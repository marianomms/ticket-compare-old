import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import Main from 'app/components/main';
import { enableDebug } from 'app/common/debug';
import configureStore from 'app/store';
import HelloWorld from './hello-world';

enableDebug();

const store = configureStore();

const App: React.FunctionComponent = () => (
  <Provider store={ store }>
    <MuiPickersUtilsProvider utils={ MomentUtils }>
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
    </MuiPickersUtilsProvider>
  </Provider>
);

export default App;
