import React, { createContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Errorpage from './component/Errorpage';
import Logout from './component/Logout';

import { initialState, reducer } from '../src/reducer/UserReducer';


// 1): context API

export const userContetext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route>
        <Errorpage />
      </Route>
    </Switch>
  )
}


function App() {

  // yha pr useContext state ki value change krha h jis ki help se hm login and logout navbar dekh parhe h
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <userContetext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </userContetext.Provider>

    </>
  )
}

export default App;
