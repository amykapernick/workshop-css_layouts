import React, {
	Fragment
} from 'react';
import { months } from "../../_data/dates";

import Overview from '../../components/partials/overview';

const IndexPage = () => {
	let currentWeek = false;

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
			<h1>Overview</h1>
			<p className="date">{weekString}</p>
			<Overview weekId={weekId} />
		</Fragment>
	);
};

export default IndexPage;
