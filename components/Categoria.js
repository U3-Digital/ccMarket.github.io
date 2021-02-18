import React, { useState, useContext } from 'react';
import firebase from './firebase';
import BusquedaContext from '../context/busqueda/BusquedaContext';

const Categoria = ({ categoria }) => {
  const [loadphoto, setloadphoto] = useState(false);
  const [urlImage, seturlImage] = useState("../img/svgs/jobs/cooking.svg");
  const storage = firebase.storage();
  const { id,categoria: nombre } = categoria;
  const busquedaContext = useContext(BusquedaContext);
  const { modificabusqueda } = busquedaContext;

  if (!loadphoto) {
    const storageRef = storage.ref(`categorias/${id}`);
    storageRef.getDownloadURL().then(function (url) {
      seturlImage(url);
    }).catch(function (error) {

      switch (error.code) {
        case 'storage/object-not-found':
          console.log(`no encontre ${id} ${urlImage}`);
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

  const buscar = () => {
    const datos = {
      nombre: nombre,
      direccion: "",
      categoria: "",
      busqueda: true,
      nombrePantalla: "busqueda",
      tipo: "CATEGORIA"
    }
    modificabusqueda(datos);
  }

  return (
    <div className="item" onClick = {()=> buscar()} style={{ width: '300px', cursor: 'pointer' }}>
      <div className="card mb-0">
        <div className="card-body">
          <div className="cat-item text-center">
            <a onClick = {()=> buscar()}></a>
            <div className="cat-img">
              <img src={urlImage} alt="img" />
            </div>
            <div className="cat-desc">
              <h5 className="mb-1">{nombre}</h5>
              <small className="badge badge-pill badge-primary mr-2">
                {Math.floor(Math.random() * 100)}
              </small>
              <span className="text-muted">Negocios disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoria;