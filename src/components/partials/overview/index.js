import React, { Fragment } from 'react';

import List from '../../parts/list';
import Notes from '../../parts/notes';

import { fullDays } from "../../../_data/dates";

const Overview = ({ weekId, monthId, currentDay }) => (
	<Fragment>
		<section className="goals_week">
			<h2>Goals this Week</h2>
			<List listName={`${weekId}_goals`} />
		</section>
		<section className="goals_month">
			<h2>Goals this Month</h2>
			<List listName={`${monthId}_goals`} />
		</section>
		<section className="events">
			<h2>Events this Week</h2>
			<List listName={`${weekId}_events`} />
		</section>
		<section className="notes_week">
			<h2>Notes this Week</h2>
			<Notes weekId={weekId} />
		</section>
		<section className="notes_month">
			<h2>Notes this Month</h2>
			<Notes weekId={weekId} />
		</section>
		<section className="current_day">
			<h2>{fullDays[currentDay]}</h2>
			<List listName={`${weekId}_${fullDays[currentDay].toLowerCase()}`} />
		</section>
	</Fragment>

);

export default Overview;
