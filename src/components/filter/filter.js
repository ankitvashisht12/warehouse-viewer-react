import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'
import classes from './Filter.module.css';

const Filter = ({ heading, arr}) => {

	const ch  = useSelector(state => state[heading]);
	const dispatch = useDispatch();


	const toggleHandler = (e, c) => {

		const newCh = [...ch]
		if(e.target.checked){
			newCh.push(c)
			dispatch(actions.checked(newCh, heading));
		}
		else {
			let idx = ch.indexOf(c);
			newCh.splice(idx, 1);
			dispatch(actions.unChecked(newCh, heading));
		}

	}

	return (
		<div className={classes.filter}>
			<h3>{`Choose ${heading}`}</h3>	
				<div className={classes.checkBox_container}>
				{
					arr.map((c) => {
						return <label className={classes.checkBox} key={c} htmlFor={c}>
							<input type="checkbox" id={c} onClick={e => toggleHandler(e, c)}/>
							{c}
						</label>	
					})
				}
				</div>
		</div>
	)
}

export default Filter
