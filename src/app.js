import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const DepenseDashboardPage = () => (
  <div>This is from my dashbaord component</div>
);

const AddDepensePage = () => (
  <div>This is my add expense component</div>
);

const EditDepensePage = () => (
  <div>This is my edit expense component</div>
);

const HelpPage = () => (
  <div>This is from my help component</div>
);

const NotFoundPage = () => (
  <div>404 Page Not Found <Link to="/">Go Home</Link></div>
);

const Header = () => (
  <header>
    <h1>Depensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));
