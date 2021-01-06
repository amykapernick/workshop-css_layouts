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
		[newTaskOpen, openNewTask] = useState(false),
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
		changeLabelForm = (ref, e) => {
			changeLabel(ref, { target: e.target.elements.label });
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
			 <div className="modal" open={newTaskOpen}>
				<form onSubmit={(e) => addTask(e)}>
					<label>New Task Name</label>
					<input
						type="text"
						placeholder="New Task"
						name={`${listName}_newTask`}
					/>
					<button className="icon add" type="submit">
						<Add />
						<span className="sr-only">Add Task</span>
					</button>
				</form>
			</div>
			<button className="icon add" onClick={() => openNewTask(!newTaskOpen)}>
				<Add />
				<span className="sr-only">Add New Task</span>
			</button>
			<ul className="list">
				{todos.map((task, index) => {
					const ref = useRef(null),
						taskId = `${journal}_${listStructure.join(`_`)}_${task.id}`,
						[editTaskOpen, openEditTask] = useState(false);
					return (
						<li key={index} ref={ref} data-id={task.id}>
							<input
								type="checkbox"
								name={`checkbox`}
								defaultChecked={task.completed}
								onChange={() => { completeTask(ref); }}
								id={`${taskId}_checkbox`}
							/>
							<label
								htmlFor={`${taskId}_checkbox`}
							>
								<Check className="check" />
								<span>{task.name}</span>
							</label>
							<button className="icon" onClick={() => openEditTask(!editTaskOpen)}>
								<Edit />
								<span className="sr-only">Edit Task</span>
							</button>

							<div className="modal" open={editTaskOpen}>

								<button className="icon close" onClick={() => openEditTask(!editTaskOpen)}>
									<Close />
									<span className="sr-only">Close Modal</span>
								</button>
								<form onSubmit={(e) => { changeLabelForm(ref, e); }}>
									<legend>Edit Task</legend>
									<input
										type="checkbox"
										name={`checkbox_modal`}
										defaultChecked={task.completed}
										onChange={(e) => { completeTask(ref, e); }}
										id={`${taskId}_checkbox_modal`}
									/>
									<label
										htmlFor={`${taskId}_checkbox_modal`}
									>
										<Check className="check" />
										<span className="sr-only">
											{task.completed ? `Uncomplete` : `Complete`} {task.name}
										</span>
									</label>
									<label className="sr-only">Edit {task.name}</label>
									<input
										type="text"
										defaultValue={task.name}
										name={`label`}
										onChange={(e) => { changeLabel(ref, e); }}
									/>
									<button className="icon remove" type="button" onClick={() => deleteTask(index)}>
										<Delete />
										<span className="sr-only">Delete Task</span>
									</button>
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
