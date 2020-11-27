import React,{useState} from 'react'
import firebase from './firebase';
import categoria from './Categoria';
import Categoria from './Categoria';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
        <Carousel
            plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 2,
                },
                },
            ]}   
        >
            <h3>Hola</h3>
            <h3>Hola2</h3>
            <h3>Hola3</h3>
        </Carousel>
    );
}

export default TablaCategorias;