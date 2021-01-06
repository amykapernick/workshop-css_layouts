import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Layout from './components/partials/layout';
import Home from './pages/home';
import Week from './pages/weekly';
import Month from './pages/monthly';

const App = () => (
	<Router>
		<Layout>
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
		</Layout>
	</Router>
);

ReactDOM.render(<App />, document.getElementById(`app`));
