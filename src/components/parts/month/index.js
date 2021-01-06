import React, {
	useState, useRef, useEffect, Fragment
} from 'react';

import Event from '../event';

import { days } from '../../../_data/dates';
import uuid from '../../../utils/uuid';

const MonthView = ({ monthId }) => {
	const month = new Date(monthId),
		monthNum = new Date(monthId).getMonth() + 1,
		year = new Date(monthId).getFullYear(),
		monthLength = new Date(new Date(month.setMonth(month.getMonth() + 1)).setDate(0)).getDate(),
		dates = [],
		localData = localStorage.getItem(`task_data`) ? JSON.parse(localStorage.getItem(`task_data`)) : false;

	let n = 1,
		initialEvents = [];

	while (n <= monthLength) {
		const day = new Date(monthId).setDate(n);

		dates.push({
			date: n,
			day: new Date(day).getDay()
		});

		n++;
	}

	if (
		localData
		&& localData.month
		&& localData.month[monthId]
		&& localData.month[monthId].events
	) {
		initialEvents = localData.month[monthId].events;
	}

	const [events, setEvents] = useState(initialEvents),
		saveLocal = (listData) => {
			const local = JSON.parse(localStorage.getItem(`task_data`)),
				localJournal = local ? local.month : {},
				localList = (local && local.month) ? local.month[monthId] : {};
			localStorage.setItem(`task_data`, JSON.stringify({
				...local,
				month: {
					...localJournal,
					[monthId]: {
						...localList,
						events: listData
					}
				}
			}));
		},
		addEvent = (e) => {
			const { newEvent, eventStart, eventEnd } = e.target.elements,
				list = events;

			list.push({
				id: uuid(),
				name: newEvent.value,
				startDate: eventStart.value,
				endDate: eventEnd.value
			});

			setEvents(list);

			saveLocal(events);
		},
		deleteEvent = (index) => {
			const list = events;

			list.splice(index, 1);

			setEvents(list);

			saveLocal(events);

			location.reload();
		};

	let row = 1,
		column = 1;

	return (
		<Fragment>
			<form onSubmit={(e) => addEvent(e)}>
				<label htmlFor={`${monthId}_newEvent_start`} >Event Name</label>
				<input id={`${monthId}_newEvent`} type="text" name="newEvent" />
				<label htmlFor={`${monthId}_newEvent_start`} >Start Date</label>
				<input
					type="date"
					id={`${monthId}_newEvent_start`}
					name="eventStart"
					min={`${year}-${`0${monthNum}`.slice(-2)}-01`}
					max={`${year}-${`0${monthNum}`.slice(-2)}-${monthLength}`}
				/>
				<label htmlFor={`${monthId}_newEvent_end`} >End Date (optional)</label>
				<input
					type="date"
					id={`${monthId}_newEvent_end`}
					name="eventEnd"
					min={`${year}-${`0${monthNum}`.slice(-2)}-01`}
					max={`${year}-${`0${monthNum}`.slice(-2)}-${monthLength}`}
				/>
				<button type="submit">Add New Event</button>
			</form>
			<ul className="month_view">

				{dates.map(({ date, day }) => {
					const styles = {};

					if (day === 0) {
						row += 1;
						column = 1;
					} else if (date === 1) {
						column = date + day;
					} else {
						column += 1;
					}

					styles[`--offset`] = column;
					styles[`--row`] = row;

					return (
						<li key={date} data-day={days[day]} className="date" style={styles}>
							<p>{date}</p>
						</li>
					);
				})}
				{events.map((event, index) => (
					<Event key={event.id} {...{
						...event,
						index,
						functions: {
							deleteEvent
						}
					}} />
				))}
			</ul>
		</Fragment>
	);
};

export default MonthView;
