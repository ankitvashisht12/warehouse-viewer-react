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