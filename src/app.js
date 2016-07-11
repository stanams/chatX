import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import { createBrowserHistory } from 'history';

ReactStormpath.init();

<Router history={createBrowserHistory()}>

  <IndexRoute component={IndexPage} />
  <HomeRoute path='/' component={MasterPage}>
  </HomeRoute>
  <LoginRoute path='/login' component={LoginPage} />
  <Route path='/register' component={RegistrationPage} />
  <AuthenticatedRoute>
    <HomeRoute path='/login' component={LoginPage} />
  </AuthenticatedRoute>

</Router>


ReactDOM.render(
  <Router history={browserHistory}>
  </Router>,
  document.getElementById('app-container')
);
