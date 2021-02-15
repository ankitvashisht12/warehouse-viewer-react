import React from 'react'
import Warehouses from '../../components/warehouses/warehouses'
import SearchAndFilter from '../search-and-filter-container/SearchAndFilter'

const home = () => {
	return (
		<div>
			<SearchAndFilter />	
			<Warehouses />
		</div>
	)
}

export default home
