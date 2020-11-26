import React,{useState} from 'react'
import firebase from './firebase';

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
                tempCategorias.push(categoria.data());
            });
            setcategorias(tempCategorias);
            setloading(false);
            setconsulta(true);
        });
    }
    if (loading) {
        return null;
    }

    console.log(categorias);    
    return(
        <h3>Hola</h3>
    );
}

export default TablaCategorias;