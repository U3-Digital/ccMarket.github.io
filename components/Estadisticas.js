import React, { useState } from 'react';
import firebase from '../components/firebase';
import {useQuery, gql} from '@apollo/client';


const OBTENER_ESTADISITCAS = gql`
  query obtenerEstadisticas{
    obtenerEstadisticas
  }
`;
const Estadisticas = () => {

  const [consulta, setConsulta] = useState(false);
  const [negocios, setNegocios] = useState(0);
  const [visitas, setVisitas] = useState(0);

  const {data,loading,error} = useQuery(OBTENER_ESTADISITCAS);

  /*if (!consulta) {
    const estadisticas = firebase.database().ref('estadisticas');
    estadisticas.on('value', (snapshot) => {
  
      setNegocios(snapshot.val().negocios);
      setVisitas(snapshot.val().visitas);
  
      setLoading(false);
      setConsulta(true);
    });
  }*/

  if (loading) {
    return (
      <div className="row m-5">
        <div className="col-12 text-center">
          <div className="spinner-border text-primary"></div>
        </div>
      </div>
    );
  }
  
  const {obtenerEstadisticas} = data;

  

  return (
    <section>
      <br />
      <br />
      <div className="about-1 cover-image sptb bg-background-color" data-image-src="../assets/images/banners/banner5.jpg">
        <div className="content-text mb-0 text-white info">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-md-6">
                <div className="counter-status status md-mb-0">
                  <div className="counter-icon text-primary">
                    <i className="icon icon-docs"></i>
                  </div>
                  <h5>Negocios registrados</h5>
                  <h2 className="counter mb-0">{obtenerEstadisticas}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
