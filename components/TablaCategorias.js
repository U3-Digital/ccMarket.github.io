import React,{useState} from 'react'
import firebase from './firebase';
import Categoria from './Categoria';
import Flecha from '../components/frontend/Flecha';

/* Carousel */

import Carousel from 'react-elastic-carousel';

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
    return(
        <div className="row justify-content-center">
            <div className="col-md-8 col-12">
            <Carousel
            style = {{transform: 'translateY(-3.5em)'}}
            breakPoints = {[
                { width: 1, itemsToShow: 1, pagination: false},
                { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
                { width: 850, itemsToShow: 3, pagination: false },
                { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false},
                { width: 1450, itemsToShow: 5, pagination: false},
                { width: 1750, itemsToShow: 6, pagination: false},
            ]}
            itemPadding = {[0, 0]}
            enableAutoPlay 
            autoPlaySpeed={1500}
            renderArrow = {Flecha}
            renderPagination = {false}>
            {
                categorias.map(categoria => (
                    <Categoria
                    key = {categoria.id}
                    categoria = {categoria}/>
                    
                ))
            }
        </Carousel>
            </div>
        </div>
    );
}

export default TablaCategorias;