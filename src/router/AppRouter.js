import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from '../components/index/NavBar';
import { PieScreen } from '../components/index/PieScreen';
import 'animate.css'

import { LayoutScreen } from '../components/layout/LayoutScreen';

export const AppRouter = () => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
       <NavBar />
      
        <div>
          <Switch>
            <Route exact path="/" component={LayoutScreen} />
            <Route exact path="/compras" component={LayoutScreen} />
            <Redirect to="/"/> 
          </Switch>
        </div>

        <PieScreen />
    </Router>
  )
}
