import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Topbar from './Topbar';
import { useRouter } from 'next/router';
import Menu from './Menu';
const Layout = ({children}) =>{
    const router = useRouter();
    return(
        <>
            <Header/>
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                {router.pathname !== '/controlPanel' ? (<Topbar/>) : (null)}
                <div className="page-body-wrapper sidebar-icon">
                    {router.pathname !== '/controlPanel' ? (<Menu/>): (null)}
                    {children}

                </div>
            </div>
            <Footer/>
        </>
    );  
}

export default Layout;/*  */