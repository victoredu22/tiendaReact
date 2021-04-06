import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LayoutScreen } from '../components/layout/LayoutScreen';


export const AppRouter = () => {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/layout" component={LayoutScreen} />
          </Switch>
        </div>
    </Router>
  )
}
