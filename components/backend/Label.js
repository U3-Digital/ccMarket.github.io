import React from 'react';

const Label = ({ texto, click }) => {

	return <label className="badge badge-pill badge-light" onClick={() => click(texto)}>{texto}</label>;
};

export default Label;
