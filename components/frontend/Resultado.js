import React, { useState, useContext } from 'react';
import BusquedaContext from '../../context/busqueda/BusquedaContext';
import firebase from '../firebase';

const Resultado = ({ negocio }) => {
  const id = negocio.id;
  const { nombre, categorias, direccion, telefonoNegocio } = negocio;
  const [loadPhoto, setLoadPhoto] = useState(false);
  const [image, setImage] = useState('../img/products/products/f1.jpg');
  const storage = firebase.storage();
  const busquedaContext = useContext(BusquedaContext);
  const { detallesPantalla } = busquedaContext;


  if (!loadPhoto) {
    try {
      const storageRef = storage.ref(`negocios/${id}/1`);
      storageRef.getDownloadURL().then((url) =>{
        setImage(url);
      }).catch((error) => {
        console.log(error.code);
      });
    } catch (error) {

    }
    setLoadPhoto(true);
  }
  
  function mostrarDetalles () {

    const valores = {
      idDetalles: id,
      nombrePantalla: 'detallesPantalla'
    }

    detallesPantalla(valores);
  }

  return (
    <div className="col-lg-6 col-md-12 col-xl-4">
      <div className="card overflow-hidden">
        <div className="item-card9-img">
          {/* <div className="arrow-ribbon bg-primary">Rent</div> */}
          <div className="item-card9-imgs">
            <a onClick={() => mostrarDetalles()}></a>
            <img src={image} alt="img" className="cover-image" style={{height: '25vh'}} />
          </div>
          <div className="item-card9-icons">
            {/* <a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a> */}
          </div>
        </div>
        <div className="card-body">
          <div className="item-card9">
            <a >{categorias[0].categoria}</a>
            <a onClick={() => mostrarDetalles()} className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">{nombre}</h4></a>
            <div className="item-card9-desc">
              <a className="mr-4"><span className=""><i className="fas fa-map-marker-alt text-muted mr-1"></i> {direccion}</span></a>
            </div>
            <div className="item-card9-desc">
              <a href={`tel:${telefonoNegocio}`}><i className="fa fa-phone mr-2 "></i>{telefonoNegocio}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;