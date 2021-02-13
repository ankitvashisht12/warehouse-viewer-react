import React from 'react';
import classes from './Header.module.css';
import { RiAccountCircleLine } from 'react-icons/ri';

const Header = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>Logo</h1>
			<RiAccountCircleLine size='2em' />
		</header>
	);
}

export default Header;