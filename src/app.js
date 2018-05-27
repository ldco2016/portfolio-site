import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={DepenseDashboardPage} />
      <Route path="/create" component={AddDepensePage} />
      <Route path="/edit" component={EditDepensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
