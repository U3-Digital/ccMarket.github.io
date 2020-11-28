import React, { useState } from 'react';
import firebase from './firebase';
import Negocio from '../components/Negocio';

/* Carousel */
import Carousel from 'react-elastic-carousel';
import Flecha from '../components/frontend/Flecha';

const TablaNegocios = () => {

	const [consulta, setConsulta] = useState(false);
	const [loading, setLoading] = useState(true);
	const [negocios, setNegocios] = useState([]);

	const tempNegocios = [];
	const database = firebase.firestore().collection('negocios');
	
	if (!consulta) {
		database.where('cliente', '==', 1).limit(6).get().then((snapshot) => {
			if (snapshot.empty) {
				console.log('La colección está vacía');
			}

			snapshot.forEach((negocio) => {
				tempNegocios.push(negocio);
			});
			setNegocios(tempNegocios);
			setLoading(false);
			setConsulta(true);
		});
	}

	if (loading) {
		return (
            <div className="row">
                <div className="col-12 text-center">Cargando</div>
            </div>
        );
	}
    return (
        <div>
			<br/><br/><br/>
			<div className="row justify-content-center">
				<div className="col-md-6 col-12 text-center">
					<h2>Negocios populares</h2>
					<p>Un texto de placeholder</p>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-12">
					<Carousel
						breakPoints = {[
							{ width: 1, itemsToShow: 1, pagination: false},
							{ width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
							{ width: 850, itemsToShow: 3, pagination: false },
							{ width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false},
							{ width: 1450, itemsToShow: 4, pagination: false},
							{ width: 1750, itemsToShow: 6, pagination: false},
						]}
						itemPadding = {[10, 10]}
						renderArrow = {Flecha}
						enableAutoPlay 
						autoPlaySpeed={3000}>
						{
							negocios.map(negocio => (
								<Negocio
									key = {negocio.id}
									negocio = {negocio}/>
							))
						}
					</Carousel>
				</div>
			</div>
		</div>
    );
};

export default TablaNegocios;
