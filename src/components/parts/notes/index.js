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

const Notes = ({ noteId }) => {
	console.log(noteId);
	const id = noteId.split(`_`).map((i) => i.toLowerCase()),
	 localData = localStorage.getItem(`task_data`) ? JSON.parse(localStorage.getItem(`task_data`)) : false;

	let initialNotes = ``;

	if (
		localData
		&& localData[id[0]]
		&& localData[id[0]][id[1]]
		&& localData[id[0]][id[1]].notes
	) {
		initialNotes = localData[id[0]][id[1]].notes;
	}

	const [notes, setNotes] = useState(initialNotes),
		saveLocal = (noteData) => {
			const local = JSON.parse(localStorage.getItem(`task_data`)),
				localJournal = local ? local[id[0]] : {},
				localList = (local && local[id[0]]) ? local[id[0]][id[1]] : {};
			localStorage.setItem(`task_data`, JSON.stringify({
				...local,
				[id[0]]: {
					...localJournal,
					[id[1]]: {
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
