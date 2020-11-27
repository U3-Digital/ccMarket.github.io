import React from 'react'
import Footer from './footer';
import Menu from './menu';
import HeadFrontEnd from './head';
import FooterPrincipal from './frontend/FooterPrincipal';
const Layout = ({children}) =>{
    return(
        <>
        <HeadFrontEnd/>
        <Menu/>
        <div>
            {children}
        </div>
        <FooterPrincipal/>
        <Footer/>
        </>

    );
}

export default Layout;