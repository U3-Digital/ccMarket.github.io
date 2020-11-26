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
        return null;
    }
  
    return(
        <div className="container">
            <div id="small-categories" className="owl-carousel owl-carousel-icons2">
                {categorias.map(categoria =>(
                    <Categoria
                        key= {categoria.id}
                        categoria = {categoria}
                    />
                ))}
            </div>
        </div>
    );
}

export default TablaCategorias;