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
            {router.pathname !== '/controlPanel' ? (<Topbar/>) : (null)}
            {router.pathname !== '/controlPanel' ? (<Menu/>): (null)}
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );  
}

export default Layout;