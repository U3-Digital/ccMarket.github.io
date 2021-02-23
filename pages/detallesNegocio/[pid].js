import React from 'react'
import Layout from '../../components/Layout';
import BarraBusqueda from '../../components/BarraBusqueda';
import {useRouter} from "next/router";
import DetallesNegocio from '../../components/frontend/DetallesNegocio';
const detallesNegocio = () => {
    const router = useRouter();
    const {query: {id}} = router;

    

    return(
        <Layout>
            <BarraBusqueda/>
            <DetallesNegocio id = {id}/> 
        </Layout>
    )
}

export default detallesNegocio;