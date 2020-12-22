import React, { useContext } from 'react';
import BackEndContext from '../../context/backend/BackEndContext';

const Menu = () => {
    const backendContext = useContext(BackEndContext);
    const {cambioPantalla} = backendContext;

    const cambio = (pantalla) =>{
        cambioPantalla(pantalla);
    }

    return (
        <>
            <header className="main-nav">
                <div className="logo-wrapper"><a onClick= {() => cambio("Dashboard")}><img onClick= {() => cambio("Dashboard")} className="img-fluid for-light" src="../backend/assets/images/logo/logo.png" alt="" /><img className="img-fluid for-dark" src="../backend/assets/images/logo/logo_dark.png" alt="" /></a>
                    <div className="back-btn"><i className="fa fa-angle-left"></i></div>
                    <div className="toggle-sidebar"><i className="status_toggle middle" data-feather="grid" id="sidebar-toggle"> </i></div>
                </div>
                <div className="logo-icon-wrapper"><a onClick= {() => cambio("Dashboard")}><img onClick= {() => cambio("Dashboard")} className="img-fluid" src="../backend/assets/images/logo/logo-icon.png" alt="" /></a></div>
                <nav>
                    <div className="main-navbar">
                        <div className="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
                        <div id="mainnav">
                            <ul className="nav-menu custom-scrollbar">
                                <li className="back-btn"><a onClick= {() => cambio("Dashboard")}><img onClick= {() => cambio("Dashboard")} className="img-fluid" src="../backend/assets/images/logo/logo-icon.png" alt="" /></a>
                                    <div className="mobile-back text-right"><span>Back</span><i className="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                                </li>
                                <li className="sidebar-title">
                                    <div>
                                        <h6 className="lan-1">Usuarios</h6>
                                        <p className="lan-2">Manejo de usuarios</p>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="nav-link menu-title"><i data-feather="user"></i><span className="lan-3">Administradores</span>
                                    {/* <label className="badge badge-success">2</label> */}</a>
                                    <ul className="nav-submenu menu-content">
                                        <li><a className="lan-4" onClick = {() => cambio("NuevoAdmin")}>Nuevo usuario</a></li>
                                        <li><a className="lan-5" onClick = {() => cambio("ListaAdmins")}>Listado de usuarios</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-title">
                                    <div>
                                        <h6 className="lan-8">Negocios</h6>
                                        <p className="lan-9">Manejo de negocios</p>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="nav-link menu-title"><i data-feather="box"></i><span>Negocios
                                    </span></a>
                                    <ul className="nav-submenu menu-content">
                                        <li><a onClick={() => cambio("NuevoNegocio")}>Nuevo negocio</a></li>
                                        <li><a onClick={() => cambio("ListaNegocios")}>Listado de negocios</a></li>
                                    </ul>
                                </li>
                                <li className="sidebar-title">
                                    <div>
                                        <h6 className="lan-8">Categorias</h6>
                                        <p className="lan-9">Manejo de categorias</p>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="nav-link menu-title"><i data-feather="layers"></i><span>categorias
                                    </span></a>
                                    <ul className="nav-submenu menu-content">
                                        <li><a onClick={() => cambio("NuevaCategoria")}>Nueva categoria</a></li>
                                        <li><a onClick={() => cambio("ListaCategoria")}>Listado de categorias</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Menu;