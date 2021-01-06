import React, {
	Fragment
} from 'react';
import {
	Link
} from 'react-router-dom';

import Overview from '../../components/partials/overview';

const IndexPage = ({
	weekId, monthId, currentDay, monthString, weekString
}) => (
	<Fragment>
		<h1 className="sr-only">Overview</h1>
		<Link className="date_month date" to="/month">{monthString}</Link>
		<Link className="date_week date" to="/week">{weekString}</Link>
		<Overview {...{ weekId, monthId, currentDay }} />
	</Fragment>
);

export default IndexPage;
