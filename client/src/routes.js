import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/hoc/layout';
import AuthCheck from './components/hoc/auth';
import RegisterLogin from './components/Register_login'
import Register from './components/Register_login/register';
import Shop from './components/Shop';
import ProductPage from './components/Product'

import UserDashboard from './components/User';
import AddProduct from './components/User/Admin/add_product';
import ManageCategories from './components/User/Admin/manage_categories';


const Routes = () => {
  return(
      <Layout>
          <Switch>
            <Route path="/user/dashboard" exact component={AuthCheck(UserDashboard, true)} />
            <Route path="/admin/add_product" exact component={AuthCheck(AddProduct,true)}/>
            <Route path="/admin/manage_categories" exact component={AuthCheck(ManageCategories,true)}/>

            <Route path="/product_detail/:id" exact component={AuthCheck(ProductPage, null)} />
            <Route path="/register" exact component={AuthCheck(Register, false)} />
            <Route path="/register_login" exact component={AuthCheck(RegisterLogin, false)} />
            <Route path="/Shop" component={AuthCheck(Shop, null)} />
            <Route path="/" component={AuthCheck(Home, null)} />
          </Switch>
      </Layout>
  );
}

export default Routes;