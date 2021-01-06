import React, { Fragment } from 'react';

import List from '../../parts/list';
import Notes from '../../parts/notes';

import { fullDays } from "../../../_data/dates";

const Overview = ({ weekId, monthId, currentDay }) => (
	<Fragment>
		<section className="goals_week section">
			<h2>Goals this Week</h2>
			<List listName={`week_${weekId}_goals`} />
		</section>
		<section className="goals_month section">
			<h2>Goals this Month</h2>
			<List listName={`month_${monthId}_goals`} />
		</section>
		<section className="events section">
			<h2>Events this Week</h2>
			<List listName={`week_${weekId}_events`} />
		</section>
		<section className="notes_week">
			<h2>Notes this Week</h2>
			<Notes noteId={`week_${weekId}`} />
		</section>
		<section className="notes_month">
			<h2>Notes this Month</h2>
			<Notes noteId={`month_${monthId}`} />
		</section>
		<section className="current_day section">
			<h2>{fullDays[currentDay]}</h2>
			<List listName={`week_${weekId}_${fullDays[currentDay].toLowerCase()}`} />
		</section>
	</Fragment>

);

export default Overview;
