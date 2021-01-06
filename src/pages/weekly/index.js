import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { months } from "../../_data/dates";

import WeeklyLayout from '../../components/partials/weekly';

import * as generate from '../../utils/generateIds';

const WeekPage = ({ weekId }) => {
	const params = useParams(),
		currentWeek = params.weekId ? new Date(params.weekId) : new Date(weekId),
		weekString = generate.weekString(currentWeek),
		id = generate.weekId(currentWeek);

	return (
		<Fragment>
			<h1 className="date">{weekString}</h1>
			<WeeklyLayout weekId={id} />
		</Fragment>
	);
};

export default WeekPage;
