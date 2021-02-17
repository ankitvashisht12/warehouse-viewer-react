import React, { useState, useEffect } from 'react';
import warehouseData from '../../data/warehouses.json';
import Warehouse from '../warehouse/warehouse';

const Detail = ({ id }) => {

	const [warehouse, setWarehouse] = useState({});
	const [name, setName] = useState("");
	const [city, setCity] = useState("");
	const [cluster, setCluster] = useState("");
	const [space, setSpace] = useState("");
	const [live, setLive] = useState("");
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		const wH = warehouseData.filter(wh => {
			return wh.id === +id;
		}).reduce((accum, val) => accum);

		console.log(wH);
		setWarehouse(wH);

	}, [id]);


	const editWarehouseHandler = (e) => {
			e.prevendDefault();
			const newWarehouse = {
				...warehouse,
				name, 
				city,
				cluster,
				space_available: space,
				is_live: live,
			}

			// call database to update / patch 
	}

	const form = (
		<form onSubmit={(e) => editWarehouseHandler(e)}>
			<label htmlFor="name">
				Name:
				<input id="name" type="text" onChange={(e) => setName(e.target.value)} />
			</label>
			<label htmlFor="city">
				City:
				<input id="city" type="text" onChange={(e) => setCity(e.target.value) }/>
			</label>
			<label htmlFor="cluster">
				Cluster:
				<input id="cluster" type="text" onChange={(e) => setCluster(e.target.value) }/>
			</label>
			<label htmlFor="Space Available">
				Space Available:
				<input id="Space Available" type="number" onChange={(e) => setSpace(e.target.value) }/>
			</label>
			<label htmlFor="live">
				Live:
				<input id="live" type="bool" onChange={(e) => setLive(e.target.value) }/>
			</label>

		</form>
	);

	return (
		<div className="detail_container">
			<div className="detail_header">
				<h1>Warehouse Details</h1>
				<button onClick={() => setEditMode(!editMode)}>Edit</button>
			</div>
			{editMode ? form : null}
			<Warehouse 
				id={id} 
				key={id} 
				name={name !== '' ? name :warehouse.name}
				code={warehouse.code}
				space_available={space !== '' ? space : warehouse.space_available}
				city={city !== '' ? city : warehouse.city}
				cluster={cluster !== '' ? cluster : warehouse.cluster}
				type={warehouse.type}
				is_registered={warehouse.is_registered}
				is_live={live !== '' ? live : warehouse.is_live}
			/> 
		</div>
	)
}

export default Detail
