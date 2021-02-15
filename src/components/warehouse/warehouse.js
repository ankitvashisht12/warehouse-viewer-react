import React from 'react'

const Warehouse = ({ name, code, id, city, space_available, type, cluster, is_registered, is_live }) => {
	return (
		<div>
			<h2>{name}</h2>		
			<h2>{city}</h2>		
			<h2>{cluster}</h2>		
			<h2>{space_available}</h2>		
		</div>
	)
}

export default Warehouse
