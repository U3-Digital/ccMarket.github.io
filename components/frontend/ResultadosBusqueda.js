import React, { useState, useContext } from 'react';
import Resultado from './Resultado';
import BusquedaContext from '../../context/busqueda/BusquedaContext';
import firebase from '../firebase';
const ResultadosBusqueda = () => {
    const [consulta, setconsulta] = useState(false);
    const [loading, setloading] = useState(true);
    const [negociosfiltrados, setnegociosfiltrados] = useState([]);
    const busquedaContext = useContext(BusquedaContext);
    const database = firebase.firestore().collection('negocios');
    const databaserealtime = firebase.database();
    const {nombre,direccion,categoria,negocios} = busquedaContext;
    const tempneg = [];
    if (!consulta) {
        negocios.filter(doc => doc.nombre.toLowerCase().includes(nombre.toLowerCase()) && doc.direccion.toLowerCase().includes(direccion.toLowerCase())).map(filteredName => {
            tempneg.push(filteredName);
        })
        setnegociosfiltrados(tempneg);
        setloading(false);
        setconsulta(true);

        

        /*const query = database.where("nombre","==",nombre).get().then(snapshot =>{
            if(snapshot.empty) {
                console.log("no se encontró algun resultado");
                return;
            }
            snapshot.forEach(doc => {
                tempneg.push(doc);
            })
            setnegocios(tempneg)
            setloading(false);
            setconsulta(true);
        }).catch(err => {
            console.log('Error getting documents', err);
        });*/
    }

    /*database.get().then(snapshot =>{
        snapshot.forEach(doc =>{
            databaserealtime.ref(`negocios2/${doc.id}`).set({
                nombre:doc.data().nombre,
                direccion:doc.data().direccion,
                valoracion: "5.0",
                noValoraciones: 0,
                cliente: true,
                ubicacion: doc.data().ubicacion,
                categoria: "Restaurante"
            })
        })
    })*/

    if (loading) {
        return (
            <div className="row">
                <div className="col-12 text-center">Cargando</div>
            </div>
        );
    }
    return (
        <div className="d-md-flex">
            <div className="map-content-width vscroll card mb-0 br-0 mh-500">
                <div className="p-4">
                    {
                        negociosfiltrados.map((negocio) => (
                            <Resultado
                                key = {negocio.id}
                                negocio={negocio}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ResultadosBusqueda;
