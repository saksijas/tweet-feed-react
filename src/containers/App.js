/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../components/Shared/Header";
import Profile from "../components/Profile/Profile";
import ProfileList from "../components/ProfileList/ProfileList";
import './App.css';
export default function App() {
  const [users,setUsers] = useState({});
  useEffect(() => {
    if(!users){
    }
  }, []);
  return (
  <Router>
    <div>
      <Header />
      <Switch>
          <Route exact path="/:username" component={Profile} />
          <Route exact path="/" component={ProfileList} />

      </Switch>
      {/* <Footer/> */}
    </div>
  </Router>
  );
}
