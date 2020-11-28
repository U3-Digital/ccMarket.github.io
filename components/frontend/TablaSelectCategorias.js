import React,{useState} from 'react';
import firebase from '../firebase';
import CategoriaMenu from './CategoriaMenu';

const TablaSelectCategorias = () => {
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
   if (loading){
       return null;
   }
    return(
        <optgroup label="Categorías">
            {categorias.map(categoria => (
                <CategoriaMenu
                    key = {categoria.id}
                    categoria = {categoria}
                />
            ))}
        </optgroup>
    )
}
export default TablaSelectCategorias;    
    