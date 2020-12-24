import React from 'react';
import Slide from './Slide';

const SliderDetalles = ({ images, click }) => {

	return (
		<div className="row">
			<div className="col-12 text-center">
				<div className="row justify-content-center">
					{images.map((image) => <Slide key={Math.random()} image={image} click={click} index={images.indexOf(image)}/>)}
				</div>
			</div>
		</div>
	);
};

export default SliderDetalles;
