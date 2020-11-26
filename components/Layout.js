import React from 'react'
import Footer from './footer';
import Menu from './menu';
import HeadFrontEnd from './head';
const Layout = ({children}) =>{
    return(
        <>
        <HeadFrontEnd/>
        <Menu/>
        <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2" data-image-src="../img/banners/banner1.jpg">
            {children}
        </div>
        <Footer/>
        </>

    );
}

export default Layout;