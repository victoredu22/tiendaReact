import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { NavBar } from "../components/index/NavBar";
import { PieScreen } from "../components/index/PieScreen";
import "animate.css";
import { createBrowserHistory } from 'history';

import { LayoutScreen } from "../components/layout/LayoutScreen";

const history = createBrowserHistory({
  basename: 'base-name'
}) 
export const AppRouter = () => {
	return (
		<Router history={history} >
			<NavBar />

			<div>
				<Switch>
					<Route exact path="/" component={LayoutScreen} />
					<Route exact path="/compras" component={LayoutScreen} />
					<Redirect to="/" />
				</Switch>
			</div>

			<PieScreen />
		</Router>
	);
};
