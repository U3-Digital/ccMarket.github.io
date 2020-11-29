import React,{useState,useContext} from 'react';
import Resultado from './Resultado';
import BusquedaContext from '../../context/busqueda/BusquedaContext';
import firebase from '../firebase';
const ResultadosBusqueda = () => {
    const [consulta, setconsulta] = useState(false);
    const [loading, setloading] = useState(true);
    const [negocios, setnegocios] = useState([]);
    const busquedaContext = useContext(BusquedaContext);
    const database = firebase.firestore().collection('negocios');

    const {nombre,direccion,categoria} = busquedaContext;
    console.log(categoria);
    const tempneg = [];
    if (!consulta) {
        const query = database.where("nombre","==",nombre).get().then(snapshot =>{
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
        });
    }

    /*const negocios = [
        {
            nombre: 'Negocio 1',
            categoria: 'Categoria 1'
        },
        {
            nombre: 'Negocio 2',
            categoria: 'Categoria 2'
        },
        {
            nombre: 'Negocio 3',
            categoria: 'Categoria 3'
        },
        {
            nombre: 'Negocio 4',
            categoria: 'Categoria 4'
        }
    ];*/
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
                        negocios.map((negocio) => (
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
