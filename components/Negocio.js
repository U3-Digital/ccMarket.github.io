import React, { useState } from 'react';
import firebase from '../components/firebase';

const Negocio = ({ negocio }) => {
  const { id } = negocio;
  const { nombre, direccion, telefono } = negocio;
  const [loadphoto, setloadphoto] = useState(false);
  const [image, setImage] = useState("../img/products/products/f1.jpg")
  const storage = firebase.storage();
  const database = firebase.database();
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
    const storageRef = storage.ref(`negocios/${id}/1`);
    storageRef.getDownloadURL().then(function (url) {
      setImage(url);
    }).catch(function (error) {
      console.log(error.code);
      
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
    setloadphoto(true);
  }

  return (
    <div className="item">
      <div className="card mb-0">
        <div className="item-card2-img">
          <a href="classified.html"></a>
          <img src={image} alt="img" className="cover-image" style={{ height: '25vh' }} />
        </div>

        <div className="card-body pb-0">
          <div className="item-card2">
            <div className="item-card2-desc">
              <div className="item-card2-text">
                <a href="classified.html" className="text-dark"><h4 className="mb-0">{nombre}</h4></a>
              </div>
              <div className="d-flex">
                <a href="">
                  <p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>{direccion}</p>
                </a>
              </div>
              <div className="d-flex">
                <p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-clock-o mr-2"></i>8:00-8:00</p>
                <a href={`tel:${telefono}`}><p className="ml-2 pb-0 pt-0 mb-2 mt-2"><i className="fa fa-phone mr-2 "></i>{telefono}</p></a>
              </div>

            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="item-card2-footer">
            <div className="item-card2-footer-u">
              <div className="row d-flex">
                <span className="review_score mr-2 badge badge-primary">2.7/5</span>
                <div className="rating-stars d-inline-flex">
                  <input type="number" readOnly={true} className="rating-value star" name="rating-stars-value" value="3" />
                  <div className="rating-stars-container">
                    <div className="rating-star sm is--active">
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="rating-star sm is--active">
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="rating-star sm is--active">
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="rating-star sm">
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="rating-star sm">
                      <i className="fa fa-star"></i>
                    </div>
                  </div> (5 Reviews)
                                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Negocio;