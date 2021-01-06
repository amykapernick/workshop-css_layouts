import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { months, fullMonths } from './_data/dates';
import Layout from './components/partials/layout';
import Home from './pages/home';
import Week from './pages/weekly';
import Month from './pages/monthly';

const App = () => {
	let currentWeek = false,
		currentMonth = new Date(),
		monthString = `${fullMonths[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`,
		monthId = `${months[currentMonth.getMonth()]}-${currentMonth.getFullYear()}`,
		currentDay = new Date().getDay();

	if (!currentWeek) {
		const currentDate = new Date(),
			currentDay = currentDate.getDay();
		let startDate = 0;

		if (currentDay === 1) {
			startDate = currentDate.getDate();
		} else if (currentDay === 0) {
			startDate = currentDate.getDate() - 6;
		} else {
			startDate = currentDate.getDate() - (currentDay - 1);
		}

		currentWeek = currentDate.setDate(startDate);
	}

	const weekDate = new Date(currentWeek),
		weekString = `${weekDate.getDate()} ${months[weekDate.getMonth()]} ${weekDate.getFullYear()}`,
		weekId = `${weekDate.getDate()}-${months[weekDate.getMonth()]}-${weekDate.getFullYear()}`,
		details = {
			weekId,
			weekString,
			monthId,
			monthString,
			currentDay
		};

	return (
		<Router>
			<Layout {...details}>
				<Switch>
					<Route exact path="/">
						<Home {...details} />
					</Route>
					<Route path="/week/:weekId?">
						<Week {...details} />
					</Route>
					<Route exact path="/month/:monthId?">
						<Month {...details} />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
};

ReactDOM.render(<App />, document.getElementById(`app`));
