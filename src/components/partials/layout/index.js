import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Home from '../../../pages/home';
import Week from '../../../pages/weekly';
import Month from '../../../pages/monthly';

const Layout = () => (
	<Router>
		<header>
			<h1><Link to="/">Bullet Journal</Link></h1>
			<nav>
				<ul>
					<li><Link to="/week">Weekly View</Link></li>
					<li><Link to="/month">Monthly View</Link></li>
				</ul>
			</nav>
		</header>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/week/:weekId?">
				<Week />
			</Route>
			<Route exact path="/month">
				<Month />
			</Route>
		</Switch>
	</Router>
);

export default Layout;
