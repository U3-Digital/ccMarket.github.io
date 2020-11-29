import React from 'react';
import Layout from '../components/Layout';
import BarraBusqueda from '../components/BarraBusqueda';
import Busquedas from '../components/frontend/Busquedas';

export default function busqueda() {

    return (
        <Layout>
            <BarraBusqueda/>
            <Busquedas/>
        </Layout>
    );

}
