import React, { Fragment } from 'react';

import Delete from '../../icons/delete';

const Event = ({
		id, name, startDate, endDate, index, functions
	}) => {
		const listings = [],
			monthStart = new Date(startDate).setDate(1),
			monthStartDay = new Date(monthStart).getDay(),
			eventStart = new Date(startDate).getDate(),
			startDay = new Date(startDate).getDay(),
			eventEnd = new Date(endDate).getDate(),
			endDay = new Date(endDate).getDay(),
			listing = {
				name,
				id,
				start: startDay + 1,
				end: endDay + 2
			};

		if ((eventStart - 1) <= 7 && monthStartDay <= startDay) {
			listing.row = 1;
		} else {
			listing.row = Math.floor(((eventStart) / 7)) + 2;
		}

		if (endDate && startDate !== endDate) {
			const eventLength = eventEnd - eventStart;

			if (eventLength <= 8 && endDay > startDay) {
				listings.push({
					...listing,
				});
			} else {
				let n = eventStart + (6 - startDay),
					{ row } = listing;

				listings.push({
					...listing,
					end: 8
				});

				row += 1;

				while (n < (eventEnd - 7)) {
					listings.push({
						...listing,
						start: 1,
						end: 8,
						row
					});

					row += 1;
					n += 7;
				}

				listings.push({
					...listing,
					start: 1,
					row
				});
			}
		} else {
			listings.push({
				...listing,
				end: false
			});
		}

		return (
			<Fragment>
				{listings.map((event) => (
					<EventListing key={JSON.stringify(event)} {...{
						...event,
						functions,
						index
					}} />
				))}
			</Fragment>
		);
	},
	EventListing = ({
		name, start, end, functions, index, row
	}) => (
		<li
			className="event" style={{
				'--event_start': start,
				'--event_end': end,
				'--row': row
			}}>
			{name}
			<button className="icon remove" type="button" onClick={() => functions.deleteEvent(index)}>
				<Delete />
				<span className="sr-only">Delete Task</span>
			</button>
		</li>
	);

export default Event;
