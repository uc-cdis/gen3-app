import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { handleLoginCompletion } from '../api/login';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route
              path='/login'
              render={() => {
                handleLoginCompletion();
                return (null);
              }}
            />
            <Route
              path='/'
              component={Homepage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
