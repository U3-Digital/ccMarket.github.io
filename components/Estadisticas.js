import React, { useState } from 'react';
import firebase from '../components/firebase';

const Estadisticas = () => {

  const [consulta, setConsulta] = useState(false);
  const [loading, setLoading] = useState(true);
  const [negocios, setNegocios] = useState(0);
  const [visitas, setVisitas] = useState(0);

  if (!consulta) {
    const estadisticas = firebase.database().ref('estadisticas');
    estadisticas.on('value', (snapshot) => {
  
      setNegocios(snapshot.val().negocios);
      setVisitas(snapshot.val().visitas);
  
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
    <section>
      <br />
      <br />
      <div className="about-1 cover-image sptb bg-background-color" data-image-src="../assets/images/banners/banner5.jpg">
        <div className="content-text mb-0 text-white info">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-md-6">
                <div className="counter-status md-mb-0">
                  <div className="counter-icon">
                    <i className="icon icon-people"></i>
                  </div>
                  <h5>Visitas</h5>
                  <h2 className="counter mb-0">{visitas}</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-status status-1 md-mb-0">
                  <div className="counter-icon text-warning">
                    <i className="icon icon-rocket"></i>
                  </div>
                  <h5>Ventas</h5>
                  <h2 className="counter mb-0">{Math.floor(Math.random() * 1000)}</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-status status md-mb-0">
                  <div className="counter-icon text-primary">
                    <i className="icon icon-docs"></i>
                  </div>
                  <h5>Negocios registrados</h5>
                  <h2 className="counter mb-0">{negocios}</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-status status">
                  <div className="counter-icon text-success">
                    <i className="icon icon-emotsmile"></i>
                  </div>
                  <h5>Clientes satisfechos</h5>
                  <h2 className="counter">{Math.floor(Math.random() * 1000)}</h2>
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
