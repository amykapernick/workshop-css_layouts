import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Month from '../../components/partials/monthly';

import * as generate from '../../utils/generateIds';

const MonthPage = ({ monthId }) => {
	const params = useParams(),
		currentMonth = params.monthId ? new Date(params.monthId) : new Date(monthId),
		monthString = generate.monthString(currentMonth),
		id = generate.monthId(currentMonth);

	return (
		<Fragment>
			<h1 className="date">{monthString}</h1>
			<Month monthId={id} />
		</Fragment>
	);
};

export default MonthPage;
