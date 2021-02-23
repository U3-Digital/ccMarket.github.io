import React, { useState } from 'react';
import firebase from './firebase';
import Negocio from '../components/Negocio';

/* Carousel */
import Carousel from 'react-elastic-carousel';
import Flecha from '../components/frontend/Flecha';
import {gql,useQuery} from '@apollo/client';

const OBTENER_NEGOCIOS = gql`
	query obtenerNegociosClientes {
	obtenerNegociosClientes {
		id
		nombre
		direccion
		telefonoNegocio
		nombreResponsable
		numeroResponsable
		emailResponsable
		categorias {
		id
		categoria
		}
		palabrasClave {
		palabraClave
		}
		horarioApertura
		horarioCierre
		cliente
		descripcion
		ubicacion
	}
	}	
`;
const TablaNegocios = () => {

	const {data,loading,error} = useQuery(OBTENER_NEGOCIOS);

	if (loading) {
		return (
			<div className="row m-5">
				<div className="col-12 text-center">
					<div className="spinner-border text-primary"></div>
				</div>
			</div>
		);
	}
	const {obtenerNegociosClientes} = data;
	return (
		<div>
			<br />
			<br />
			<br />
			<div className="row justify-content-center">
				<div className="col-md-6 col-12 text-center">
					<h2>Negocios populares</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-12">
					<Carousel
						breakPoints={[
							{ width: 1, itemsToShow: 1, pagination: false },
							{ width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
							{ width: 850, itemsToShow: 3, pagination: false },
							{ width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
							{ width: 1450, itemsToShow: 4, pagination: false },
							{ width: 1750, itemsToShow: 6, pagination: false }
						]}
						itemPadding={[ 10, 10 ]}
						renderArrow={Flecha}
						enableAutoPlay
						autoPlaySpeed={10000}
					>
						{obtenerNegociosClientes.map((negocio) => <Negocio key={negocio.id} negocio={negocio} />)}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default TablaNegocios;
