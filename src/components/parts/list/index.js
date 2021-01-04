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
		[open, setOpen] = useState(false),
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
		},
		changeLabel = () => {
			// const taskId = current.getAttribute(`data-id`),
			// 	list = todos;

			// list.some((task) => {
			// 	if (task.id === taskId) {
			// 		task.completed = current.querySelector(`input[type="checkbox`).checked;
			// 	}

			// 	return task.id === taskId;
			// });

			// setTodos(list);

			// saveLocal(todos);
		},
		openModal = () => {

		};

	useEffect(() => { saveLocal(todos); }, [todos]);

	return (
		<ul>
			{todos.map((task, index) => {
				const ref = useRef(null),
					taskId = `${journal}_${listStructure.join(`_`)}_${task.id}`;
				return (
					<li key={index} ref={ref} data-id={task.id}>
						<input
							type="checkbox"
							name={`${taskId}_checkbox`}
							defaultChecked={task.completed}
							onChange={() => { completeTask(ref); }}
							id={`${taskId}_checkbox`}
						/>
						<label
							htmlFor={`${taskId}_checkbox`}
						>
							{task.text}
						</label>
						<button onClick={() => openModal()}>Edit Task</button>
						<div open={open}>
							<form onSubmit={changeLabel()}>
								<legend>Edit Task</legend>
								<input
									type="checkbox"
									name={`${taskId}_checkbox`}
									defaultChecked={task.completed}
									onChange={() => { completeTask(ref); }}
									id={`${taskId}_checkbox`}
								/>
								<label
									htmlFor={`${taskId}_checkbox`}
								>
									{task.completed ? `Uncomplete` : `Complete`} {task.text}
								</label>
								<label>Edit {task.text}</label>
								<input
									type="text"
									defaultValue={task.text}
									onChange={() => { changeLabel(ref); }}
								/>
							</form>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
