import warehousesData from '../../data/warehouses.json';
import  * as actionTypes from '../actions/action_types';

let initialState= {
	warehouseData : warehousesData,
	cities: [],
	clusters: [],
	space: 0,
	isFilter: false
}

const getUpdatedWarehouses = (data) => {
	let newWarehouses = [];

	const hasCity = data.cities.length > 0 ? true : false;
	const hasCluster = data.clusters.length > 0 ? true : false;
	const hasSpace = data.spaceVal > 0 ? true : false;
	
	for( let i = 0; i< warehousesData.length; i++){

		if( ((hasCity && data.cities.indexOf(warehousesData[i].city) !== -1 ) || !hasCity ) && 
				((hasSpace && data.spaceVal <= warehousesData[i].space_available ) || (!hasSpace)) && 
				((hasCluster && data.clusters.indexOf(warehousesData[i].cluster) !== -1) || (!hasCluster)) ) {
						console.log(warehousesData[i]);
						newWarehouses.push(warehousesData[i]);
		}
	}

	if(newWarehouses.length === 0)
		return warehousesData;

	return newWarehouses;

}

const filterReducer  = (state=initialState, actions) => {
	switch(actions.type ) {
		case actionTypes.FILTER_ADD:
		const updatedWarehouses = getUpdatedWarehouses(actions.payload);
		return {
			...state,
			warehouseData: updatedWarehouses,
			isFilter: true
		}	
	

		case actionTypes.FILTER_REMOVE:
			console.log(actions.payload);
			return { 
				...state, 
				warehouseData: actions.payload, 
				cities: [], 
				clusters: [], 
				isFilter: false
			}; 
	

		case actionTypes.CHECKED:
		if(actions.payload.category === 'cities'){
			return {
				...state,
				cities: actions.payload.data
			}
		}else {
			return {
				...state,
				clusters: actions.payload.data
			}

		}
	

		case actionTypes.UNCHECKED:
		if(actions.payload.category === 'cities'){
			return {
				...state,
				cities: actions.payload.data
			}
		}else {
				return {
					...state,
					clusters: actions.payload.data
				}
		}

	
	 case actionTypes.SEARCH:
		return {
			...state,
			warehouseData: actions.payload
		} 

		default: return state;
	}
}


export default filterReducer;