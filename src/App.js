import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GalleriesApp from "./pages/GalleriesApp";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul style={{
            listStyle: 'none', 
            overflow: 'hidden', 
            backgroundColor: "lightgray",
            margin: 0,
            padding: 10,}}>
            <li style={{float: 'left',}}>
              <Link to="/" style={{textDecoration: 'none'}}>All Galleries</Link>
            </li>
            <li style={{float: 'right',}}>
              <Link to="/login" style={{textDecoration: 'none'}}>Log in</Link> 
            </li>
            <li style={{float: 'right',}}>
              <Link to="/register" style={{textDecoration: 'none'}}>Register</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <GalleriesApp />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
