import React, { useState, useContext } from 'react';
import firebase from '../components/firebase';
import BusquedaContext from '../context/busqueda/BusquedaContext';
import {useRouter} from 'next/router';
const Negocio = ({ negocio }) => {
  
  const router = useRouter();
  const { id } = negocio;
  const { nombre, direccion, telefonoNegocio, horarioApertura, horarioCierre } = negocio;
  const [loadphoto, setloadphoto] = useState(false);
  const [image, setImage] = useState("../img/products/products/f1.jpg")
  const storage = firebase.storage();
  const database = firebase.database();
  const busquedaContext = useContext(BusquedaContext);
  const { detallesPantalla } = busquedaContext;
  /*                 <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
   */

 /*  database.ref(`negocios2/${id}`).set({
    nombre: nombre,
    direccion: direccion,
    horario: "8:00-9:00",
    telefono: telefono,
    valoracion: "5.0",
    noValoraciones: 0,
    cliente: true
  }) */

  if (!loadphoto) {
    
    const router = useRouter();
    const storageRef = storage.ref(`negocios/${id}/1`);
    try {
      storageRef.getDownloadURL().then(function (url) {
        setImage(url);
      }).catch(function (error) {
        
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
  
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
  
          case 'storage/canceled':
            // User canceled the upload
            break;
  
  
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
      
    } catch (error) {
      
    }
    
    setloadphoto(true);
  }

  const mostrarDetalles = () => {
    router.push({
        pathname:"/detallesNegocio/[id]",
        query: {id}
    });
  }


  return (
    <div className="item" style={{ width: '100%' }}>
      <div className="card mb-0">
        <div className="item-card2-img">
          <a onClick={() => mostrarDetalles()}></a>
          <img src={image} alt="img" className="cover-image" style={{ height: '25vh' }} />
        </div>

        <div className="card-body pb-0">
          <div className="item-card2">
            <div className="item-card2-desc">
              <div className="item-card2-text">
                <a  onClick={() => mostrarDetalles()} className="text-dark"><h4 className="mb-0">{nombre}</h4></a>
              </div>
              <div className="d-flex">
                <a href="">
                  <p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>{direccion}</p>
                </a>
              </div>
              <div className="d-flex">
                <p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-clock-o mr-2"></i>{horarioApertura}-{horarioCierre}</p>
                <a href={`tel:${telefonoNegocio}`}><p className="ml-2 pb-0 pt-0 mb-2 mt-2"><i className="fa fa-phone mr-2 "></i>{telefonoNegocio}</p></a>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Negocio;