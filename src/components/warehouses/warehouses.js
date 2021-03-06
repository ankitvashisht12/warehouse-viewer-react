import React from 'react';
import { useSelector } from 'react-redux';
import Warehouse from '../warehouse/warehouse';
import classes from './Warehouses.module.css';

const Warehouses = () => {
	const warehouses = useSelector((state) => state.warehouseData);

	return (
		<div className={classes.warehouse_container}>
			<h2>Warehouses</h2>
			{
				warehouses.map(({ name, code, id, city, space_available, type, cluster, is_registered, is_live }) => {
					return <Warehouse 
						key={id} 
						id={id}
						name={name}
						code={code}
						city={city}
						space_available={space_available}
						is_registered={is_registered}
						type={type}
						cluster={cluster}
						is_live={is_live}
					/>
				})
			}
		</div>
	)
}

export default Warehouses
