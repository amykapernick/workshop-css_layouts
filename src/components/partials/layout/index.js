import React, { Fragment } from 'react';
import {
	Link,
	useLocation
} from 'react-router-dom';

import Header from '../header';

import '../../../scss/main.scss';

const Layout = ({ children }) => (
	<Fragment>
		<Header />
		<main className={`${useLocation().pathname.replace(/^\//, ``).split(`/`)[0]}`}>
			{children}
		</main>
	</Fragment>
);

export default Layout;
