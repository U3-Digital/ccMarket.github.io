import React, { useContext, useState } from 'react'
import Layout from '../components/Layout';
import BarraBusqueda from '../components/BarraBusqueda';
import TablaCategorias from '../components/TablaCategorias';
import TablaNegocios from '../components/TablaNegocios';
import Estadisticas from '../components/Estadisticas';
import IndexPrincipal from '../components/frontEnd/IndexPrincipal';
import Busquedas from '../components/frontend/Busquedas';
import BusquedaContext from '../context/busqueda/BusquedaContext';
import firebase from '../components/firebase';
export default function Home() {
  const busquedaContext = useContext(BusquedaContext);
  const { nombre, busqueda, direccion, categoria, cargarNegocios } = busquedaContext;
  const [loading, setloading] = useState(false);
  const database = firebase.database();
  if (!loading) {
    const negoTemp = [];
    const negocios = database.ref('negocios2');
    negocios.once('value').then((snapshot) => {
      snapshot.forEach(doc => {
        const objNegocio = doc.val();
        objNegocio.id = doc.key;

        negoTemp.push(objNegocio);
      })
      cargarNegocios(negoTemp);
      setloading(true);
    });
  }
  // const database = firebase.database();

  //const database2 = firebase.firestore().collection('categorias');
  // Add a new document with a generated id.


  /* function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }

  const cosa = async () => {
    const casa = database.ref('/negocios').once('value').then((snapshot) => {
      snapshot.val().forEach( async (negocio) => {
          console.log(negocio);
          const id = randomString(32, '#aA');
          const data = {
            ...negocio
          }
          const res = await database2.doc(id).set(data);
      });
    });
    
  }

  cosa(); */
  return (
    <Layout>
      <BarraBusqueda />
      {!busqueda ? (<IndexPrincipal />) : (<Busquedas />)}

    </Layout>
  )
}
