import React from 'react'
import Filter from '../filter/filter'
import warehouseData from '../../data/warehouses.json';
import * as actions from '../../store/actions/actions';
import { useSelector, useDispatch } from 'react-redux';


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
		dispatch(actions.add_filter(data));
	}

	const spaceChangeHandler = (e) =>  {
		spaceVal = +e.target.value
	}

	return (
		<div>
			<h2>Filter</h2>
			<form onSubmit={filterSubmitHandler}>
			<Filter heading="cities" arr={uniqueCities}/>	
			<Filter heading="clusters" arr={uniqueClusters}/>	
			<label htmlFor="space">
				Space Avaliable
				<input type="number" id="space" 
					onChange={e => spaceChangeHandler(e)}
					placeholder="Enter Minimum Space "/>
			</label>

			<button>Submit</button>
			</form>
		</div>
	)
}

export default Filters
