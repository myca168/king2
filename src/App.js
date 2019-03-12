import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Tax from './components/Tax';	
import Job from './components/Job';	

class App extends Component {

  render() {
	  
	  return (
      <div className="gcweb-v2 gcweb-menu">
      
      <div className="container">
  
      
      <ul className="nav nav-pills">
      <li ><Link to="/" className="nav-link"> Home </Link></li>
    
      <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">Services
      <span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li><Link to="/job" className="nav-link">Employment</Link></li>
        <li><Link to="/tax" className="nav-link">Income Tax</Link></li>
      </ul>
    </li>
      <li><Link to="/about" className="nav-link">About</Link></li>
      </ul>
      
 	        <div>
	          <Switch>
	            <Route exact path="/"  component={Home} />
	            <Route path="/job" component={Job} />
	            <Route path="/tax" component={Tax} />		
	            <Route path="/about" component={About} />
	            <Redirect to="/" />
	          </Switch>
	        </div>
      </div>
      </div>
    );
  }
}

export default App;

