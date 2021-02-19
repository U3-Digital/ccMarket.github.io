import React, { useState, useContext } from 'react'
import firebase from '../firebase';
import BusquedaContext from '../../context/busqueda/BusquedaContext';

const NegocioPatrocinio = ({ negocio }) => {
  const { id, nombre, telefonoNegocio } = negocio;
  const [loadPhoto, setLoadPhoto] = useState(false);
  const [image, setImage] = useState("../img/products/1.png");
  const storage = firebase.storage();
  const busquedaContext = useContext(BusquedaContext);
  const { detallesPantalla } = busquedaContext;

  if (!loadPhoto) {
    try {
      const storageRef = storage.ref(`negocios/${id}/1`);
      storageRef.getDownloadURL().then((url) => {
        setImage(url);
      }).catch((error) => {
        console.log(error.code);
      });
    } catch (error) {

    }
    setLoadPhoto(true)
  }






  function mostrarDetalles () {

    const valores = {
      idDetalles: id,
      nombrePantalla: 'detallesPantalla'
    }
    detallesPantalla(valores  );
  }

  return (
    <li class="news-item">
      <table>
        <tr>
          <td className="pr-2"><img  onClick={() => mostrarDetalles()} src={image} alt="image" class="w-8 border mr-3"/></td>
          <td><h5 onClick={() => mostrarDetalles()} class="mb-1 ">{nombre}</h5><a href={`tel:${telefonoNegocio}`}><i className="fa fa-phone mr-2 "></i>{telefonoNegocio}</a></td>
        </tr>
      </table>
    </li>
  )
}

export default NegocioPatrocinio;