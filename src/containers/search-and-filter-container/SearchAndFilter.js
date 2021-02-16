import React from 'react';
import Filters from '../../components/filters/Filters';
import SearchBar from '../../components/search-bar/SearchBar'
import classes from "./SearchAndFilter.module.css";
const SearchAndFilter = () => {
	return (
		<div className={classes.search_filter_container}>
		<SearchBar />
		<Filters />
		</div>
	)
}

export default SearchAndFilter;
