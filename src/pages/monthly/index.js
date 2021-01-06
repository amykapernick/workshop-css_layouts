import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { fullMonths, months } from "../../_data/dates";

import Month from '../../components/partials/monthly';

const MonthPage = () => {
	const params = useParams(),
		currentMonth = params.monthId ? new Date(params.monthId) : new Date(),
		monthString = `${fullMonths[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`,
		monthId = `${months[currentMonth.getMonth()]}-${currentMonth.getFullYear()}`;

	return (
		<Fragment>
			<h1 className="date">{monthString}</h1>
			<Month monthId={monthId} />
		</Fragment>
	);
};

export default MonthPage;
