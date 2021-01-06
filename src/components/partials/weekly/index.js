import React, { Fragment } from 'react';

import List from '../../parts/list';
import Notes from '../../parts/notes';

const Week = ({ weekId }) => (
	<Fragment>
		<section className="goals section">
			<h2>Goals</h2>
			<List listName={`week_${weekId}_goals`} />
		</section>
		<section className="events section">
			<h2>Events</h2>
			<List listName={`week_${weekId}_events`} />
		</section>
		<section className="work section">
			<h2>Work</h2>
			<List listName={`week_${weekId}_work`} />
		</section>
		<section className="personal section">
			<h2>Personal</h2>
			<List listName={`week_${weekId}_personal`} />
		</section>
		<section className="selfcare section">
			<h2>Selfcare</h2>
			<List listName={`week_${weekId}_selfcare`} />
		</section>
		<section className="notes">
			<h2>Notes</h2>
			<Notes noteId={`week_${weekId}`} />
		</section>
		<section className="days">
			<h2 className="sr-only">Days</h2>
			<ul className="lists">
				<li className="day">
					<h3>Monday</h3>
					<List listName={`week_${weekId}_monday`} />
				</li>
				<li className="day">
					<h3>Tuesday</h3>
					<List listName={`week_${weekId}_tuesday`} />
				</li>
				<li className="day">
					<h3>Wednesday</h3>
					<List listName={`week_${weekId}_wednesday`} />
				</li>
				<li className="day">
					<h3>Thursday</h3>
					<List listName={`week_${weekId}_thursday`} />
				</li>
				<li className="day">
					<h3>Friday</h3>
					<List listName={`week_${weekId}_friday`} />
				</li>
				<li className="day">
					<h3>Saturday</h3>
					<List listName={`week_${weekId}_saturday`} />
				</li>
				<li className="day">
					<h3>Sunday</h3>
					<List listName={`week_${weekId}_sunday`} />
				</li>
			</ul>
		</section>
	</Fragment>

);

export default Week;
