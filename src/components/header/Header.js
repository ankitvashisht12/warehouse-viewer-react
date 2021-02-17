import React from 'react';
import classes from './Header.module.css';
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link } from '@reach/router';

const Header = () => {
	return (
		<header className={classes.header}>
			<Link to='/'>
				<h1 className={classes.logo}>Logo</h1>
			</Link>
			<RiAccountCircleLine size='2em' />
		</header>
	);
}

export default Header;