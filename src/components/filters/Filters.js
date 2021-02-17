import React from 'react'
import Filter from '../filter/filter'
import warehouseData from '../../data/warehouses.json';
import {add_filter, remove_filter, renderWarehouse} from '../../store/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Filters.module.css';


const getUniqueCities = () => {
	const citiesSet = new Set();
	for(let i = 0; i<warehouseData.length; i++) {
		if(!citiesSet.has(warehouseData[i].city)){
			citiesSet.add(warehouseData[i].city);
		}
	}

	const cities = Array.from(citiesSet);
	return cities;
}


const getUniqueCluster= () => {
	const clusterSet = new Set();
	for(let i = 0; i<warehouseData.length; i++){
		if(!clusterSet.has(warehouseData[i].cluster)){
			clusterSet.add(warehouseData[i].cluster);
		}
	}

	const clusters = Array.from(clusterSet);

	return clusters;
}


const Filters = () => {
	
	const uniqueCities = getUniqueCities();
	const uniqueClusters = getUniqueCluster();
	let spaceVal = 0;

	const cities = useSelector(state => state.cities);
	const clusters = useSelector(state => state.clusters);

	const dispatch = useDispatch();

	const filterSubmitHandler = (e) => {
		e.preventDefault();
		const data = {
			cities,
			clusters,
			spaceVal 
		}
		console.log(data);
		dispatch(add_filter(data));
	}

	const spaceChangeHandler = (e) =>  {
		spaceVal = +e.target.value
	}

//	const clearFilterHandler = () => {
//		dispatch(remove_filter(warehouseData));
//	}

	return (
		<div className={classes.filter_container}>
			<div className={classes.filter_header}>
				<h2>Filter</h2>
				{/* <button onClick={clearFilterHandler}>Clear Filter</button> */}
			</div>
			<form onSubmit={filterSubmitHandler}>
			<Filter heading="cities" arr={uniqueCities}/>	
			<Filter heading="clusters" arr={uniqueClusters}/>	
			<label htmlFor="space">
				Space Avaliable
				<input className={classes.spaceInput} type="number" id="space" 
					onChange={e => spaceChangeHandler(e)}
					placeholder="Enter Minimum Space "/>
			</label>

			<button type="submit" className={classes.submit_button}>Submit</button>
			</form>
		</div>
	)
}

export default Filters
