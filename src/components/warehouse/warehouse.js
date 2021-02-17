import React from 'react'
import classes from './warehouse.module.css';
import { Link } from "@reach/router";

const Warehouse = ({ name, code, id, city, space_available, type, cluster, is_registered, is_live }) => {

	return (
		<Link className={classes.link} to={`/details/${id}`} >
		<div className={classes.warehouse} >
			<h2>{name}</h2>		
			<h3>City: {city}</h3>		
			<h3>Cluster: {cluster}</h3>		
			<h3>code: {code}</h3>		
			<h3>Space Availabe: {space_available}</h3>		
		</div>
		</Link>
	)
}

export default Warehouse
