import React, {
	Fragment, useState, useRef, useEffect
} from 'react';

import uuid from '../../utils/uuid';

const newTasks = [
		{
			id: `107821979378`,
			text: `Task 1`,
			completed: false
		},
		{
			id: `164020381583`,
			text: `Task 2`,
			completed: true
		},
		{
			id: `1184065035300`,
			text: `Task 3`,
		}
	],

	IndexPage = () => {
		const initialTasks = localStorage.getItem(`todos`) ? JSON.parse(localStorage.getItem(`todos`)) : newTasks,
			[todos, setTodos] = useState(initialTasks),
			completeTask = (item) => {
				const list = todos;

				list.some((task) => {
					if (task.id === item.current.name) {
						task.completed = item.current.checked;
					}

					return task.id === item.current.name;
				});

				setTodos(list);

				localStorage.setItem(`todos`, JSON.stringify(todos));
			};

		useEffect(() => {
			localStorage.setItem(`todos`, JSON.stringify(todos));
		}, [todos]);

		return (
			<Fragment>
				<h2>Index Page</h2>
				<h3>To Do List</h3>
				<ul>
					{todos.map((task, index) => {
						const ref = useRef(null);
						return (
							<li key={index}>
								<input
									type="checkbox"
									name={task.id}
									defaultChecked={task.completed}
									onChange={() => { completeTask(ref); }}
									ref={ref}
								/>
								<label>{task.text}</label>
							</li>
						);
					})}
				</ul>
			</Fragment>
		);
	};

export default IndexPage;
