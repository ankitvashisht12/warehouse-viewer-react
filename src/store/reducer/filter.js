import warehousesData from '../../data/warehouses.json';
import  * as actionTypes from '../actions/action_types';

let initialState= {
	warehouseData : warehousesData
}

const getUpdatedWarehouses = (data) => {
	let newWarehouses = [];
	
	for( let i = 0; i< warehousesData.length; i++){
		if( (data.cities.length > 0 && data.cities.indexOf(warehousesData[i].city) !== -1 ) || 
				(data.space_available > 0 && data.space_available <= warehousesData[i].space_available ) || 
				(data.clusters.length > 0 && data.clusters.indexOf(warehousesData[i].cluster) !== -1)) {
						newWarehouses.push(warehousesData[i]);
		}
	}

	if(newWarehouses.length === 0)
		return warehousesData;

	return newWarehouses;

}

const filterReducer  = (state=initialState, actions) => {
	if(actions.type === actionTypes.FILTER_ADD){
		const updatedWarehouses = getUpdatedWarehouses(actions.payload);
		return {
			warehouseData: updatedWarehouses,
		}	
	}

	if(actions.type === actionTypes.FILTER_REMOVE){
		return { warehousesData }; 
	}

	return state;
}


export default filterReducer;