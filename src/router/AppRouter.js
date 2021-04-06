import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ComprasScreen } from '../components/layout/ComprasScreen';
import { LayoutScreen } from '../components/layout/LayoutScreen';


export const AppRouter = () => {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LayoutScreen} />
            <Route exact path="/compras" component={ComprasScreen} />
            <Redirect to="/"/> 
          </Switch>
        </div>
    </Router>
  )
}
