import React from 'react';

const Label = ({ texto }) => {

	const handleEvent = event => {
		console.log('hey');
	}

	return <label className="badge badge-pill badge-light" onClick={handleEvent}>{texto}</label>;
};

export default Label;
