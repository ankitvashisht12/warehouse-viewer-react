import * as action_types from './action_types';



export const add_filter = (data) => {
	return {
		type: action_types.FILTER_ADD,
		payload: data
	}
}

export const remove_filter = () => {
	return {
		type: action_types.FILTER_REMOVE,
		payload: {}
	}
}