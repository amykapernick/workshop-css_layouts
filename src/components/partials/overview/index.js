import React, { Fragment } from 'react';

import List from '../../parts/list';
import Notes from '../../parts/notes';

const Overview = ({ weekId }) => (
	<Fragment>
		<section className="goals">
			<h2>Goals</h2>
			<List listName={`${weekId}_weeklyGoals`} />
		</section>
		<section className="events">
			<h2>Events</h2>
			<List listName={`${weekId}_events`} />
		</section>
		<section className="notes">
			<h2>Notes</h2>
			<Notes weekId={weekId} />
		</section>
	</Fragment>

);

export default Overview;
