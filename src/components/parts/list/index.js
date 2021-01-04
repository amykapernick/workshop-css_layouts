import React, {
	useState, useRef, useEffect, Fragment
} from 'react';
import { useLocation } from 'react-router-dom';

import newTasks from '../../../_data/tasks';
import uuid from '../../../utils/uuid';

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
				localJournal = local ? local[journal] : {},
				localList = (local && local[journal]) ? local[journal][listStructure[0]] : {};
			localStorage.setItem(`task_data`, JSON.stringify({
				...local,
				[journal]: {
					...localJournal,
					[listStructure[0]]: {
						...localList,
						[listStructure[1]]: listData
					}
				}
			}));
		},
		completeTask = (ref, e) => {
			const { current } = ref,
				checkbox = e.target,
				taskId = current.getAttribute(`data-id`),
				list = todos;

			list.some((task) => {
				if (task.id === taskId) {
					task.completed = checkbox.checked;
				}

				return task.id === taskId;
			});

			setTodos(list);

			saveLocal(todos);
		},
		changeLabel = (ref, e) => {
			if (e && ref) {
				const { current } = ref,
					newLabel = e.target.value,
					taskId = current.getAttribute(`data-id`),
					list = todos;

				list.some((task) => {
					if (task.id === taskId) {
						task.name = newLabel;
					}

					return task.id === taskId;
				});

				setTodos(list);

				saveLocal(todos);
			}
		},
		openModal = () => {

		},
		deleteTask = (index) => {
			const list = todos;

			list.splice(index, 1);

			setTodos(list);

			saveLocal(todos);
		},
		addTask = (e) => {
			const newLabel = e.target.elements[`${listName}_newTask`].value,
				list = todos;

			list.push({
				id: uuid(),
				name: newLabel,
				completed: false
			});

			setTodos(list);

			saveLocal(todos);
		};

	useEffect(() => { saveLocal(todos); }, [todos]);

	return (
		<Fragment>
			<form onSubmit={(e) => addTask(e)}>
				<label>New Task Name</label>
				<input
					type="text"
					placeholder="New Task"
					name={`${listName}_newTask`}
				/>
				<button type="submit">Add Task</button>
			</form>
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
								{task.name}
							</label>
							<button onClick={() => deleteTask(index)}>Delete Task</button>
							<button onClick={() => openModal()}>Edit Task</button>
							<div open={open}>
								<form onSubmit={changeLabel()}>
									<legend>Edit Task</legend>
									<input
										type="checkbox"
										name={`${taskId}_checkbox`}
										defaultChecked={task.completed}
										onChange={(e) => { completeTask(ref, e); }}
										id={`${taskId}_checkbox_modal`}
									/>
									<label
										htmlFor={`${taskId}_checkbox_modal`}
									>
										{task.completed ? `Uncomplete` : `Complete`} {task.name}
									</label>
									<label>Edit {task.name}</label>
									<input
										type="text"
										defaultValue={task.name}
										onChange={(e) => { changeLabel(ref, e); }}
									/>
									<button onClick={() => deleteTask(index)}>Delete Task</button>
								</form>
							</div>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
};

export default List;
