import React from 'react';
import {
	Link,
	useLocation
} from 'react-router-dom';

const Header = () => (
	<header className="header">
		<h1><Link to="/">Bullet Journal</Link></h1>
		<nav>
			<ul>
				<li><Link to="/week">Weekly View</Link></li>
				<li><Link to="/month">Monthly View</Link></li>
			</ul>
		</nav>
	</header>
);

export default Header;
