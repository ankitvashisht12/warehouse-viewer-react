import React from 'react'
import Warehouses from '../../components/warehouses/warehouses'
import SearchAndFilter from '../search-and-filter-container/SearchAndFilter'
import classes from './Home.module.css';

const home = () => {
	return (
		<div className={classes.home_container}>
			<SearchAndFilter />	
			<Warehouses />
		</div>
	)
}

export default home
