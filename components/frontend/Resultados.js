import React, { useState, useContext, useEffect } from 'react';
import Resultado from './Resultado';
import BusquedaContext from '../../context/busqueda/BusquedaContext';
import firebase from '../firebase';
import OtroResultado from './OtroResultado';
import {gql,useQuery} from '@apollo/client';
import Patrocinados from './Patrocinados';

const OBTENER_NEGOCIOS = gql`
    query buscarNegocios($busqueda: String!, $tipo: TipoBusqueda){
      buscarNegocios(busqueda: $busqueda,tipo: $tipo){
        id
        nombre
        direccion
        telefonoNegocio
        numeroResponsable
        nombreResponsable
        emailResponsable
        cliente
        categorias{
          categoria
        }

        }
    }
`;

const Resultados = () => {

  const [consulta, setConsulta] = useState(false);
  //const [loading, setLoading] = useState(true);
  const [negociosFiltrados, setNegociosFiltrados] = useState([]);
  const busquedaContext = useContext(BusquedaContext);
  const { nombre, tipo, negocios, status, cambiaStatus, detallesPantalla } = busquedaContext;
  const tempNegocios = [];
  const tempNegociosnoCliente = [];


  const {data,loading,error} = useQuery(OBTENER_NEGOCIOS,{
    variables: {
      busqueda: nombre,
      tipo
    }
  });

  /*
  useEffect(() => {
    if (status === false) {
      setLoading(true);

      negocios.filter((negocio) => {
        if (negocio.nombre.toLowerCase().includes(nombre.toLowerCase())) {
          return negocio;
        }

        else if (negocio.categoria) {
          if (negocio.categoria.toLowerCase().includes(nombre.toLowerCase())) {
            return negocio;
          }
        }

      }).map((negocioFiltrado) => {
          if (negocioFiltrado.cliente) {
            tempNegocios.push(negocioFiltrado);
          } else {
            tempNegociosnoCliente.push(negocioFiltrado);
          }
      });


/* .map((negocioFiltrado) => {
          if (negocioFiltrado.cliente) {
            tempNegocios.push(negocioFiltrado);
          } else {
            tempNegociosnoCliente.push(negocioFiltrado);
          }
        });
        
        negocio.categoria.toLowerCase().includes(categoria.toLowerCase()).map((negocioFiltrado) => {
          if (negocioFiltrado.cliente) {
            tempNegocios.push(negocioFiltrado);
          } else {
            tempNegociosnoCliente.push(negocioFiltrado);
          }
        });
        
        

       negocios.filter((doc) => doc.nombre.toLowerCase().includes(nombre.toLowerCase())).map((filteredName) => {
        if (filteredName.cliente){
          tempNegocios.push(filteredName);
        }else{
          tempNegociosnoCliente.push(filteredName);
        }
      }); 

      tempNegociosnoCliente.map((negocio) => {
        tempNegocios.push(negocio);
      })
      setNegociosFiltrados(tempNegocios);
      setLoading(false);
      setConsulta(true);
      cambiaStatus(true);
    }
  }, [status]);
*/
  if (loading) {
    return (
      <div className="row m-5">
        <div className="col-12 text-center">
          <div className="spinner-border text-primary"></div>
        </div>
      </div>
    );
  }
  const {buscarNegocios} = data;
  

  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-12">
            <div className=" mb-lg-0">
              <div className="">
                <div className="item2-gl">
                  <div className=" mb-0">
                    <div className="">
                      <div className="bg-white p-5 item2-gl-nav d-flex">
                        <h6 className="mb-0 mt-2">Mostrando {buscarNegocios.length} resultados</h6>
                        <ul className="nav item2-gl-menu ml-auto">
                          {/* <li className=""><a href="#tab-11" className="active show" data-toggle="tab" title="List style"><i className="fa fa-list"></i></a></li>
                          <li><a href="#tab-12" data-toggle="tab" className="" title="Grid"><i className="fa fa-th"></i></a></li> */}
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane" id="tab-11">
                      <div className="row">

                      </div>

                    </div>
                    <div className="tab-pane active" id="tab-12">
                      <div className="row">
                        {
                          buscarNegocios.map((negocio) => (
                            negocio.cliente ? (
                              <Resultado
                              key = {negocio.id}
                              negocio={negocio} />
                            ) : (
                              <OtroResultado
                              key = {negocio.id}
                              negocio={negocio} />
                            )
                            
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-12">
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Patrocinados</h3>
              </div>
              <Patrocinados/>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resultados;