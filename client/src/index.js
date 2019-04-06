import React from 'react';
import { hydrate, render } from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Users from './components/Users';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';



const routing = (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
  )

  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    hydrate(routing, rootElement);
  } else {
    render(routing, rootElement);
  }


  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



