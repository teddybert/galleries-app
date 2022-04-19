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
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authService from "./services/AuthService";
import {useState} from "react";
import CreateGalleryPage from "./pages/CreateGalleryPage";
import MyGalleriesPage from "./pages/MyGalleriesPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  async function handleLogout() {
    await authService.logout();
    setIsAuthenticated(false);
  }

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
              <Link to="/" style={{textDecoration: 'none', display: 'block'}}>All Galleries</Link>
            </li>
            {!isAuthenticated && (
              <li style={{float: 'right',}}>
                <Link to="/login" style={{textDecoration: 'none', display: 'block'}}>Log in</Link> 
              </li>
            )}
            {!isAuthenticated && (
              <li style={{float: 'right',}}>
                <Link to="/register" style={{textDecoration: 'none', display: 'block'}}>Register</Link>
              </li>
            )}

            <li style={{float: 'left',}}>
              <Link to="/create" style={{textDecoration: 'none', display: 'block'}}>Create New Gallery</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <PublicRoute exact path="/login">
            <LoginPage onLogin={() => { 
              setIsAuthenticated(true);
            }} />
          </PublicRoute>

          <PublicRoute exact path="/register">
            <RegisterPage onRegister={() => {
              setIsAuthenticated(true);
            }}/>
          </PublicRoute>

          <PrivateRoute exact path="/mygalleries">
            <MyGalleriesPage />
          </PrivateRoute>

          <PrivateRoute exact path="/create"> 
            <CreateGalleryPage />
          </PrivateRoute>

          <Route exact path="/">
            <GalleriesApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
