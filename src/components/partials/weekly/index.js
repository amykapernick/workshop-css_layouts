import React, { Fragment } from 'react';

import List from '../../parts/list';
import Notes from '../../parts/notes';

const Week = ({ weekId }) => (
	<Fragment>
		<section className="goals">
			<h2>Goals</h2>
			<List listName={`${weekId}_goals`} />
		</section>
		<section className="events">
			<h2>Events</h2>
			<List listName={`${weekId}_events`} />
		</section>
		<section className="work">
			<h2>Work</h2>
			<List listName={`${weekId}_work`} />
		</section>
		<section className="personal">
			<h2>Personal</h2>
			<List listName={`${weekId}_personal`} />
		</section>
		<section className="selfcare">
			<h2>Selfcare</h2>
			<List listName={`${weekId}_selfcare`} />
		</section>
		<section className="notes">
			<h2>Notes</h2>
			<Notes weekId={weekId} />
		</section>
		<section className="days">
			<h2 className="sr-only">Days</h2>
			<ul className="lists">
				<li className="day">
					<h3>Monday</h3>
					<List listName={`${weekId}_monday`} />
				</li>
				<li className="day">
					<h3>Tuesday</h3>
					<List listName={`${weekId}_tuesday`} />
				</li>
				<li className="day">
					<h3>Wednesday</h3>
					<List listName={`${weekId}_wednesday`} />
				</li>
				<li className="day">
					<h3>Thursday</h3>
					<List listName={`${weekId}_thursday`} />
				</li>
				<li className="day">
					<h3>Friday</h3>
					<List listName={`${weekId}_friday`} />
				</li>
				<li className="day">
					<h3>Saturday</h3>
					<List listName={`${weekId}_saturday`} />
				</li>
				<li className="day">
					<h3>Sunday</h3>
					<List listName={`${weekId}_sunday`} />
				</li>
			</ul>
		</section>
	</Fragment>

);

export default Week;
