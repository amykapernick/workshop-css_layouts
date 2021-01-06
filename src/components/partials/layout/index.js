import React, { Fragment } from 'react';
import {
	Link,
	useLocation
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../../../scss/main.scss';

const Layout = ({ children }) => (
	<Fragment>
		{/* <Helmet
			bodyAttributes={{
				class: `${useLocation().pathname.replace(/^\//, ``).split(`/`)[0]}`
			}}
		/> */}
		<header>
			<h1><Link to="/">Bullet Journal</Link></h1>
			<nav>
				<ul>
					<li><Link to="/week">Weekly View</Link></li>
					<li><Link to="/month">Monthly View</Link></li>
				</ul>
			</nav>
		</header>
		<main className={`${useLocation().pathname.replace(/^\//, ``).split(`/`)[0]}`}>
			{children}
		</main>
	</Fragment>
);

export default Layout;
