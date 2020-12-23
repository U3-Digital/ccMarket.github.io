import React, { useState, useContext } from 'react';
import BusquedaContext from '../../context/busqueda/BusquedaContext';
import firebase from '../firebase';

const Resultado = ({ negocio }) => {
  const id = negocio.id;
  const { nombre, categoria, direccion } = negocio;
  const [loadPhoto, setLoadPhoto] = useState(false);
  const [image, setImage] = useState('../img/products/products/f1.jpg');
  const storage = firebase.storage();
  const busquedaContext = useContext(BusquedaContext);
  const { detallesPantalla } = busquedaContext;

  console.log(negocio);

  if (!loadPhoto) {
    const storageRef = storage.ref(`negocios/${id}/1.png`);
    storageRef.getDownloadURL().then((url) =>{
      setImage(url);
    }).catch((error) => {
      console.log(error.code);
    });
    setLoadPhoto(true);
  }
  
  function mostrarDetalles () {

    const valores = {
      idDetalles: id,
      nombrePantalla: 'detallesPantalla'
    }

    detallesPantalla(valores  );
  }

  return (
    <div className="col-lg-6 col-md-12 col-xl-4">
      <div className="card overflow-hidden">
        <div className="item-card9-img">
          {/* <div className="arrow-ribbon bg-primary">Rent</div> */}
          <div className="item-card9-imgs">
            <a href="classified.html"></a>
            <img src={image} alt="img" className="cover-image" style={{height: '25vh'}}/>
          </div>
          <div className="item-card9-icons">
            {/* <a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a> */}
          </div>
        </div>
        <div className="card-body">
          <div className="item-card9">
            <a >{categoria}</a>
            <a onClick={() => mostrarDetalles()} className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">{nombre}</h4></a>
            <div className="item-card9-desc">
              <a className="mr-4"><span className=""><i className="fas fa-map-marker-alt text-muted mr-1"></i> {direccion}</span></a>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="item-card9-footer d-flex">
            <div className="item-card9-cost">
              <h4 className="text-dark font-weight-semibold mb-0 mt-0">$263.99</h4>
            </div>
            <div className="ml-auto">
              <div className="rating-stars block">
                <input type="number" readOnly className="rating-value star" name="rating-stars-value" value="3" />
                <div className="rating-stars-container">
                  <div className="rating-star sm">
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="rating-star sm">
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="rating-star sm">
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="rating-star sm">
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="rating-star sm">
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;