import React,{useState} from 'react'
import firebase from './firebase';
import Categoria from './Categoria';
import {gql,useQuery} from '@apollo/client';
/* Carousel */

import Carousel from 'react-elastic-carousel';
import Flecha from '../components/frontend/Flecha';


const OBTENER_CATEGORIAS = gql`
    query obtenerCategorias {
        obtenerCategorias {
            id
            categoria
        }
    }
`

const TablaCategorias = () =>{
    const {data,loading,error} = useQuery(OBTENER_CATEGORIAS);

    const tempCategorias = [];
    /*
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
    }*/
    if (loading) {
        return (
            <div className="row">
                <div className="col-12 text-center">Cargando</div>
            </div>
        );
    }

    const {obtenerCategorias} = data;
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
                itemPadding = {[0, 10]}
                enableAutoPlay 
                autoPlaySpeed={1500}
                renderArrow = {Flecha}>
                {
                    obtenerCategorias.map(categoria => (
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