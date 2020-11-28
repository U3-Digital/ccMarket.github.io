import React from 'react';
import TablaCategorias from '../TablaCategorias';
import TablaNegocios from '../TablaNegocios';
import Estadisticas from '../Estadisticas';
import Localizaciones from '../Localizaciones';
const IndexPrinipal = () =>{
    return(
        <>
            <TablaCategorias/>
            <TablaNegocios/>
            <Estadisticas/>
            <Localizaciones/>
        </>
    );
} 

export default IndexPrinipal;