import React from 'react';

import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	FormLabel,
} from '@material-ui/core';

export default function Form({
	formLabel,
	values,
	labels,
	currentValue,
	onChange,
}) {
	return (
		<div className='card container-small {classes.table}'>
			<FormControl>
				<FormLabel style={{fontSize:'20px',color: "black"}}>{formLabel}</FormLabel>
				<br></br>
				<RadioGroup value={currentValue} onChange={onChange}>
					{values.map((value, index) => {
						return (
							<FormControlLabel
							key={`${value}_${index}`}
							value={value}
							control={<Radio />}
							label={labels[index]}
							style={{paddingBottom:'10px'}}
							/>
							);
						})}
						<br></br>
				</RadioGroup>
			</FormControl>
		</div>
	);
}
