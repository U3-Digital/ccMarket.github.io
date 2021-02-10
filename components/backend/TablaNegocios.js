import React from 'react'
import RowNegocio from './RowNegocio';
import {useQuery,gql} from '@apollo/client';

const OBTENER_NEGOCIOS = gql`
    query buscarNegocios($busqueda: String!){
        buscarNegocios(busqueda: $busqueda){
        id
        nombre
        direccion
        telefonoNegocio
        }
    }
`;

const TablaNegocios = ({busqueda}) => {
    
    const {data,loading,error} = useQuery(OBTENER_NEGOCIOS,{
        variables:{
            busqueda
        }
    });

    if(loading) return 'Cargando...';
    if(!data) return 'Cargando...'
    const {buscarNegocios} = data;

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="best-seller-table responsible-tbl">
                                    <div className="item">
                                        <div className="table-responsive product-list">
                                            <table className="table table-bordernone">
                                                <thead>
                                                    <tr>
                                                        <th className="f-22">Negocio</th>
                                                        <th>Reponsable</th>
                                                        <th>Número del responsable</th>
                                                        <th>Correo del responsable</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        buscarNegocios.map((negocio) => (
                                                            <RowNegocio
                                                                key={negocio.id}
                                                                negocio={negocio}/>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablaNegocios;