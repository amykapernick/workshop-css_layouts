import React, {
	useState, useRef, useEffect, Fragment
} from 'react';
import { useLocation } from 'react-router-dom';

import Item from '../listItem';

import Add from '../../icons/add';
import Delete from '../../icons/delete';
import Edit from '../../icons/edit';
import Close from '../../icons/close';
import Check from '../../icons/check';
import uuid from '../../../utils/uuid';

const List = ({ listName }) => {
	const listStructure = listName.split(`_`),
		localData = localStorage.getItem(`task_data`) ? JSON.parse(localStorage.getItem(`task_data`)) : false;

	let initialTasks = [],
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
		[addMultiple, toggleInputMethod] = useState(false),
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
							taskId: `${journal}_${listStructure.join(`_`)}_${task.id}`,
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
