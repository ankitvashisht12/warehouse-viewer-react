import * as action_types from './action_types';

export const add_filter = (data) => {
	return {
		type: action_types.FILTER_ADD,
		payload: data
	}
}

export const remove_filter = (data) => {
	return {
		type: action_types.FILTER_REMOVE,
		payload:data 
	}
}

export const checked = (data, category) => {
	return {
		type: action_types.CHECKED,
		payload: {
			data,
			category
		}
	}
}

export const unChecked = (data, category) => {
	return {
		type: action_types.UNCHECKED,
		payload: {
			data,
			category
		}
	}
}

export const renderWarehouse = (data) => {
	return {
		type: action_types.SEARCH,
		payload: data
	}
}