import React, {
	Fragment
} from 'react';
import { months, fullMonths } from "../../_data/dates";

import Overview from '../../components/partials/overview';

const IndexPage = () => {
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
		weekId = `${weekDate.getDate()}-${months[weekDate.getMonth()]}-${weekDate.getFullYear()}`;
	return (
		<Fragment>
			<h1 className="sr-only">Overview</h1>
			<a className="date_month date" href="/month">{monthString}</a>
			<a className="date_week date" href="/week">{weekString}</a>
			<Overview {...{ weekId, monthId, currentDay }} />
		</Fragment>
	);
};

export default IndexPage;
