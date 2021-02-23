import React, { useContext, useEffect, useState } from 'react';
import TablaSelectCategorias from '../components/frontend/TablaSelectCategorias';
import firebase from '../components/firebase';
import BusquedaContext from '../context/busqueda/BusquedaContext';
import {useRouter} from 'next/router';
const BarraBusqueda = () => {
  const router = useRouter();
  const [nombre, setnombre] = useState("");
  const [direccion, setdireccion] = useState("");
  const [categoria, setcategoria] = useState("");
  const busquedaContext = useContext(BusquedaContext);
  const { modificabusqueda } = busquedaContext;


  const database = firebase.database();
  const firestore = firebase.firestore().collection("negocios");

  const buscar = () => {
    const datos = {
      nombre: nombre,
      direccion: direccion,
      categoria: categoria,
      busqueda: true,
      nombrePantalla: "busqueda",
      tipo: "TEXTO"
    }
    modificabusqueda(datos);
  };

  const buscarInfo = () => {
    router.push({
        pathname:"/busqueda/[id]",
        query: {textobusqueda: nombre, tipo:"T"}
    })
  }


  const enEnter = (event) => {
    if (event.key === 'Enter') {
      buscarInfo();
    }
  };


  return (
    <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2" data-image-src="../img/banners/banner1.jpeg">
      <div className="header-text mb-0">
        <div className="container">
          <div className="text-center text-white mb-7">
            <h1 className="mb-1">Encuentra tu mejor opción</h1>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
              <div className="search-background bg-transparent">
                <div className="form row no-gutters ">
                  <div className="form-group col-xl-10 col-lg-9 col-md-12 mb-0 bg-white">
                    <input onKeyDown={(event) => enEnter(event)} onChange={value => { setnombre(value.target.value) }} type="text" className="form-control input-lg br-tr-md-0 br-br-md-0" id="text4" placeholder="Busque algo" />
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                    <a onClick={() => buscarInfo()} href="#" className="btn btn-lg btn-block btn-primary br-tl-md-0 br-bl-md-0"><i className="fas fa-search"></i> Buscar</a>
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

export default BarraBusqueda;