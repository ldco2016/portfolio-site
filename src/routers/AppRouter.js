import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddDepensePage from '../components/AddDepensePage';
import DepenseDashboardPage from '../components/DepenseDashboardPage';
import EditDepensePage from '../components/EditDepensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={DepenseDashboardPage} />
        <Route path="/create" component={AddDepensePage} />
        <Route path="/edit" component={EditDepensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
