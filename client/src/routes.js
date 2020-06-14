import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/hoc/layout';
import Auth from './components/hoc/auth';
import RegisterLogin from './components/Register_login'
import Register from './components/Register_login/register';
import UserDasboard from './components/User';


const Routes = () => {
  return(
      <Layout>
          <Switch>
            <Route path="/user/dashboard" exact component={Auth(UserDasboard, true)} />
            <Route path="/register" exact component={Auth(Register, false)} />
            <Route path="/register_login" exact component={Auth(RegisterLogin, false)} />
            <Route path="/" component={Auth(Home, null)} />
          </Switch>
      </Layout>
  );
}

export default Routes;