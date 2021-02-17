import React from 'react';
import classes from './SearchBar.module.css';
import { RiSearchLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import {renderWarehouse} from '../../store/actions/actions';
import warehouses from '../../data/warehouses.json';

const SearchBar = () => {



	const dispatch = useDispatch();
	const searchHandler = (e) => {
		let searchTerm = e.target.value;
		
		let newWarehouses = warehouses.filter(warehouse => {
			if(searchTerm === "") return true;
			return (warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()));
		})


		dispatch(renderWarehouse(newWarehouses));
	}

	return (
		<div className={classes.searchBarContainer}>
			<input type="text" onChange={e => searchHandler(e)} placeholder='Search...' className={classes.searchBar}/>	
			{/* <button className={classes.searchBarBtn}><RiSearchLine /></button> */}
		</div>
	)
}

export default SearchBar;
