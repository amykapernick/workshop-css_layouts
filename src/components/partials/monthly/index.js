import React, { Fragment } from 'react';

import List from '../../parts/list';
import Notes from '../../parts/notes';
import MonthView from '../../parts/month';

const Month = ({ monthId }) => (
	<Fragment>
		<section className="goals section">
			<h2>Goals</h2>
			<List listName={`month_${monthId}_goals`} />
		</section>
		<section className="notes">
			<h2>Notes</h2>
			<Notes noteId={`month_${monthId}`} />
		</section>
		<section className="calendar section">
			<h2 className="sr-only">Days</h2>
			<MonthView {...{
				monthId
			}} />
		</section>
	</Fragment>

);

export default Month;
