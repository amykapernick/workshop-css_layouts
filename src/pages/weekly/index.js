import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { months } from "../../_data/months";

import WeeklyLayout from '../../components/partials/weekly';

const WeekPage = () => {
	const params = useParams(),
		weekStart = params.weekId && new Date(params.weekId);

	 let currentWeek = weekStart;

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
			<h1 className="date">{weekString}</h1>
			<WeeklyLayout weekId={weekId} />
		</Fragment>
	);
};

export default WeekPage;
