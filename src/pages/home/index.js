import React, {
	Fragment, useState, useRef, useEffect
} from 'react';

import List from '../../components/parts/list';

import uuid from '../../utils/uuid';

const 	IndexPage = () => (
	<Fragment>
		<h2>Index Page</h2>
		<h3>To Do List</h3>
		<List listName="weekId_list" />
		<h3>Another List</h3>
		<List listName="weekId_newList" />
	</Fragment>
);

export default IndexPage;
