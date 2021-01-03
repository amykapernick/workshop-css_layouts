import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';

import newTasks from '../../../_data/tasks';

const List = ({ listName }) => {
	const listStructure = listName.split(`_`),
	 localData = localStorage.getItem(`task_data`) ? JSON.parse(localStorage.getItem(`task_data`)) : false;

	let initialTasks = newTasks,
		journal = `week`;

	if (RegExp(/^\/month\/*/).test(useLocation().pathname)) {
		journal = `month`;
	}

	if (
		localData
		&& localData[journal]
		&& localData[journal][listStructure[0]]
		&& localData[journal][listStructure[0]][listStructure[1]]
	) {
		initialTasks = localData[journal][listStructure[0]][listStructure[1]];
	}

	const [todos, setTodos] = useState(initialTasks),
		saveLocal = (listData) => {
			const local = JSON.parse(localStorage.getItem(`task_data`)),
				localList = (local && local[journal]) ? local[journal][listStructure[0]] : {};
			localStorage.setItem(`task_data`, JSON.stringify({
				...local,
				[journal]: {
					...local[journal],
					[listStructure[0]]: {
						...localList,
						[listStructure[1]]: listData
					}
				}
			}));
		},
		completeTask = ({ current }) => {
			const taskId = current.getAttribute(`data-id`),
				list = todos;

			list.some((task) => {
				if (task.id === taskId) {
					task.completed = current.querySelector(`input[type="checkbox`).checked;
				}

				return task.id === taskId;
			});

			setTodos(list);

			saveLocal(todos);
		};

	useEffect(() => { saveLocal(todos); }, [todos]);

	return (
		<ul>
			{todos.map((task, index) => {
				const ref = useRef(null);
				return (
					<li key={index} ref={ref} data-id={task.id}>
						<input
							type="checkbox"
							name={`${journal}_${listStructure.join(`_`)}_${task.id}_checkbox`}
							defaultChecked={task.completed}
							onChange={() => { completeTask(ref); }}
							id={`${journal}_${listStructure.join(`_`)}_${task.id}_checkbox`}
						/>
						<label
							htmlFor={`${journal}_${listStructure.join(`_`)}_${task.id}_checkbox`}
						>
							{task.text}
						</label>
						<button>Edit Task</button>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
