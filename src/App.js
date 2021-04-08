
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
export const LogedInContext=createContext();
function App() {
  const [LogedInUser,setLogedInuser]=useState({})
  return (
    <div>
        <LogedInContext.Provider value={[LogedInUser,setLogedInuser]}>
  <Router>
     <Header></Header>
      <Switch>
      <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
        </Switch>
   </Router>
    </LogedInContext.Provider>
    </div>
    
  );
}

export default App;
