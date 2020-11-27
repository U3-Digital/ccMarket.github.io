import React,{useState} from 'react'
import firebase from './firebase';
import categoria from './Categoria';
import Categoria from './Categoria';

const TablaCategorias = () =>{
    const [consulta, setconsulta] = useState(false);
    const [loading, setloading] = useState(true);
    const [categorias, setcategorias] = useState([]);

    const tempCategorias = [];
    
    const database = firebase.firestore().collection('categorias');
    if (!consulta) {
        database.get().then(snapshot => {
            if (snapshot.empty){
                console.log('La coleccion esta vacia');
            }
            snapshot.forEach(categoria =>{
                tempCategorias.push(categoria);
            });
            setcategorias(tempCategorias);
            setloading(false);
            setconsulta(true);
        });
    }
    if (loading) {
        return (
            <div className="row">
                <div className="col-12 text-center">Cargando</div>
            </div>
        );
    }

    /* <Categoria
                            key = {categoria.id}
                            categoria = {categoria}
                        /> */

    return(
        <div className="row justify-content-center" style={{transform: "translateY(-4em)"}}>
            <div className="col-md-8 col-12">
                <div className="row justify-content-center">
                {
                    categorias.map(categoria => (
                        <Categoria
                            key = {categoria.id}
                            categoria = {categoria}
                        />
                    ))
                }
                </div>
            </div> 
        </div>
    );
}

export default TablaCategorias;