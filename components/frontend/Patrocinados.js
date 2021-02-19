import React from 'react'
import {useQuery, gql} from '@apollo/client';
import NegocioPatrocinio from './NegocioPatrocinio';

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

const Patrocinados = () => {

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


    return(
        <div class="card-body ">
            <ul class="vertical-scroll">
                {obtenerNegociosClientes.map(negocio => (
                    <NegocioPatrocinio negocio={negocio}/>
                ))}
            </ul>
        </div>
    )
}

export default Patrocinados;