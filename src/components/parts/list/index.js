import React, {
	useState, useEffect, Fragment
} from 'react';
import { useLocation } from 'react-router-dom';

import Item from '../listItem';

import Close from '../../icons/close';
import Add from '../../icons/add';
import uuid from '../../../utils/uuid';

const List = ({ listName }) => {
	const listStructure = listName.split(`_`).map((i) => i.toLowerCase()),
		localData = localStorage.getItem(`task_data`) ? JSON.parse(localStorage.getItem(`task_data`)) : false;

	let initialTasks = [];

	if (
		localData
		&& localData[listStructure[0]]
		&& localData[listStructure[0]][listStructure[1]]
		&& localData[listStructure[0]][listStructure[1]][listStructure[2]]
	) {
		initialTasks = localData[listStructure[0]][listStructure[1]][listStructure[2]];
	}

	const [todos, setTodos] = useState(initialTasks),
		[newTaskOpen, openNewTask] = useState(false),
		[addMultiple, toggleInputMethod] = useState(false),
		saveLocal = (listData) => {
			const local = JSON.parse(localStorage.getItem(`task_data`)),
				localJournal = local ? local[listStructure[0]] : {},
				localList = (local && local[listStructure[0]]) ? local[listStructure[0]][listStructure[1]] : {};
			localStorage.setItem(`task_data`, JSON.stringify({
				...local,
				[listStructure[0]]: {
					...localJournal,
					[listStructure[1]]: {
						...localList,
						[listStructure[2]]: listData
					}
				}
			}));
		},
		completeTask = (ref, e) => {
			const { current } = ref,
				checkbox = e.target,
				taskId = parseInt(current.getAttribute(`data-id`)),
				list = todos;

			list.some((task) => {
				if (parseInt(task.id) === taskId) {
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
					taskId = parseInt(current.getAttribute(`data-id`)),
					list = todos;

				list.some((task) => {
					if (parseInt(task.id) === taskId) {
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

			location.reload();
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
		},
		addMultipleTask = (e) => {
			const newLabel = e.target.elements[`${listName}_newTask`].value,
				newTasks = newLabel.split(`\n`);

			newTasks.forEach((task) => {
				addTask({
					target: {
						elements: {
							[`${listName}_newTask`]: {
								value: task
							}
						}
					}
				});
			});
		};

	useEffect(() => { saveLocal(todos); }, [todos]);

	return (
		<Fragment>
			 <div className="modal" open={newTaskOpen}>
				<button className="icon close" onClick={() => openNewTask(!newTaskOpen)}>
					<Close />
					<span className="sr-only">Close Modal</span>
				</button>
				<form className="toggle" onSubmit={(e) => addTask(e)} open={!addMultiple}>
					<legend>Add New Task</legend>
					<label className="sr-only">New Task Name</label>
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
				<form className="toggle" onSubmit={(e) => addMultipleTask(e)} open={addMultiple}>
					<legend>Add New Tasks</legend>
					<label className="sr-only">New Tasks</label>
					<textarea
						className="multiple"
						defaultValue={`Task 1\nTask 2\nTask 3`}
						name={`${listName}_newTask`}
					/>
					<button className="icon add" type="submit">
						<Add />
						<span className="sr-only">Add Task</span>
					</button>
				</form>
				<button className="toggle add" type="button" onClick={() => toggleInputMethod(!addMultiple)}>
					{addMultiple
						? `Add single task`
						: `Add multiple tasks`
					}
				</button>
			</div>
			<button className="icon add" onClick={() => openNewTask(!newTaskOpen)}>
				<Add />
				<span className="sr-only">Add New Task</span>
			</button>
			<ul className="list">
				{todos.map((task, index) => (
					<Item
						key={index}
						{...{
							...task,
							index,
							taskId: `${listStructure.join(`_`)}_${task.id}`,
							functions: {
								completeTask,
								changeLabelForm,
								changeLabel,
								deleteTask
							}
						}}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default List;
