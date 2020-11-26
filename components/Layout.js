import React from 'react'
import Footer from './footer';
import Menu from './menu';
import HeadFrontEnd from './head';
const Layout = ({children}) =>{
    return(
        <>
        <HeadFrontEnd/>
        <Menu/>
        <div>
            {children}
        </div>
        <Footer/>
        </>

    );
}

export default Layout;