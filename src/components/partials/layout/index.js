import React, { Fragment } from 'react';
import {
	Link,
	useLocation, useParams
} from 'react-router-dom';

import Header from '../header';

import '../../../scss/main.scss';

const Layout = ({ children, weekId, monthId }) => (
	<Fragment>
		<Header {...{ monthId, weekId }} />
		<main className={`${useLocation().pathname.replace(/^\//, ``).split(`/`)[0]}`}>
			{children}
		</main>
	</Fragment>
);

export default Layout;
