import React from 'react'
import {useRouter} from "next/router";
import Layout from '../../components/Layout';
import BarraBusqueda from '../../components/BarraBusqueda';
import Busquedas from '../../components/frontend/Busquedas';


const busqueda = () => {
    const router = useRouter();
    const {query: {textobusqueda,tipo}} = router;


    return(
        <Layout>
            <BarraBusqueda/>
            <Busquedas busqueda = {textobusqueda} tipo = {tipo === "T" ? ("TEXTO") : ("CATEGORIA")}/>
        </Layout>
    )
}
export default busqueda;