import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {checked, unChecked} from '../../store/actions/actions'
import classes from './Filter.module.css';

const Filter = ({ heading, arr}) => {

	const ch  = useSelector(state => state[heading]);
	const dispatch = useDispatch();


	const toggleHandler = (e, c) => {

		let newCh = [...ch]
		if(e.target.checked){
			newCh.push(c);
			dispatch(checked(newCh, heading));
		}
		else {
			let idx = ch.indexOf(c);
			newCh.splice(idx, 1);
			dispatch(unChecked(newCh, heading));
		}

	}

	return (
		<div className={classes.filter}>
			<h3>{`Choose ${heading}`}</h3>	
				<div className={classes.checkBox_container}>
				{
					arr.map((c) => {
						return <label className={classes.checkBox} key={c} htmlFor={c}>
							<input 
								type="checkbox" 
								id={c} 
								onClick={e => toggleHandler(e, c)}
								/>
							{c}
						</label>	
					})
				}
				</div>
		</div>
	)
}

export default Filter
