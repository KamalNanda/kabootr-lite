import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Views/Register'
import Login from './Views/Login'
import Feeds from './Views/Feeds'
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'

function App() {
  return (<BrowserRouter>
    <div className="App"> 
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/feeds">
          <Feeds />
        </Route>
      </Switch> 
    </div>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
  </BrowserRouter>);
}

export default App;