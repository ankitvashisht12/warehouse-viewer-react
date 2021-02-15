import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'


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
		<div>
			<h3>{`Choose ${heading}`}</h3>	
				{
					arr.map((c) => {
						return <label key={c} htmlFor={c}>
							<input type="checkbox" onClick={e => toggleHandler(e, c)}/>
							{c}
						</label>	
					})
				}
		</div>
	)
}

export default Filter
