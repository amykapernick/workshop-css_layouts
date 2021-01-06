import React, {
	useState, useRef, useEffect, Fragment
} from 'react';
import { useLocation } from 'react-router-dom';

import Add from '../../icons/add';
import Delete from '../../icons/delete';
import Edit from '../../icons/edit';
import Close from '../../icons/close';
import Check from '../../icons/check';
import newTasks from '../../../_data/tasks';
import uuid from '../../../utils/uuid';

const Notes = ({ weekId }) => {
	const localData = localStorage.getItem(`task_data`) ? JSON.parse(localStorage.getItem(`task_data`)) : false;

	let journal = `week`,
		initialNotes = ``;

	if (RegExp(/^\/month\/*/).test(useLocation().pathname)) {
		journal = `month`;
	}

	if (
		localData
		&& localData[journal]
		&& localData[journal][weekId]
		&& localData[journal][weekId].notes
	) {
		initialNotes = localData[journal][weekId].notes;
	}

	const [notes, setNotes] = useState(initialNotes),
		saveLocal = (noteData) => {
			const local = JSON.parse(localStorage.getItem(`task_data`)),
				localJournal = local ? local[journal] : {},
				localList = (local && local[journal]) ? local[journal][weekId] : {};
			localStorage.setItem(`task_data`, JSON.stringify({
				...local,
				[journal]: {
					...localJournal,
					[weekId]: {
						...localList,
						notes: noteData
					}
				}
			}));
		},

		changeLabel = (e) => {
			if (e) {
				const newNotes = e.target.value;

				setNotes(newNotes);

				saveLocal(notes);
			}
		};

	useEffect(() => { saveLocal(notes); }, [notes]);

	return (
		<Fragment>
			<label className="sr-only">Edit Notes</label>
			<textarea
				name="notes"
				onChange={(e) => { changeLabel(e); }}
				defaultValue={notes}
			>
			</textarea>
		</Fragment>
	);
};

export default Notes;
