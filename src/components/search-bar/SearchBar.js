import React from 'react';
import classes from './SearchBar.module.css';
import { RiSearchLine } from 'react-icons/ri';

const SearchBar = () => {
	return (
		<div className={classes.searchBarContainer}>
			<input placeholder='Search...' className={classes.searchBar}/>	
			<button className={classes.searchBarBtn}><RiSearchLine /></button>
		</div>
	)
}

export default SearchBar;
