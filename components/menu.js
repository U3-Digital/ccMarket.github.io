import React, { useState, useContext } from 'react';
import firebase from './firebase';
import BusquedaContext from '../context/busqueda/BusquedaContext';
//password
//google.com
const Menu = () => {
	const [logeado, setlogeado] = useState(false);
	const [nombre,setnombre] = useState(null);
	const busquedaContext = useContext(BusquedaContext);
    const {modificabusqueda} = busquedaContext;
	const database = firebase.firestore().collection('usuarios')
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			if (user.providerData[0].providerId == "google.com") {
				const { displayName } = user;
				setnombre(displayName);
			} else {
				const { uid } = user;
				database.doc(uid).get().then((snapshot) => {
					setnombre(snapshot.data().nombre);
				});
			}
			setlogeado(true);
		} else {
		  console.log('No hay usuario brodersonia');
		}
	});
	  
	function logout() {
		firebase.auth().signOut().then(function() {
			setlogeado(false)
		}).catch(function(error) {	
			// An error happened.
		});
	}

	const buscar = () =>{
        const datos = {
            nombre: "",
            direccion: "",
            categoria: "",
            busqueda: false	
        }
        modificabusqueda(datos);
    }

    return(
		<div>
			<div id="global-loader">
				<img src="../img/products/products/loader.png" className="loader-img floating" alt=""/>
			</div>
			<div className="header-main">
				<div className="horizontal-header clearfix">
					<div className="container">
						<a id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
						<span className="smllogo"><img src="../img/brand/logo.png" width="120" alt=""/></span>
						<a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone"  ></i></a>
					</div>
				</div>
				
				<div className="horizontal-main bg-dark-transparent clearfix">
					<div className="horizontal-mainwrapper container clearfix">
						<div className="desktoplogo">
							<a href="index.html"><img src="../img/brand/logo1.png" alt=""/></a>
						</div>
						<div className="desktoplogo-1">
							<a href="index.html"><img src="../img/brand/logo.png" alt=""/></a>
						</div>
						
						<nav className="horizontalMenu clearfix d-md-flex">
							<ul className="horizontalMenu-list">
								<li aria-haspopup="true"><a onClick={()=> buscar()} className="active">Inicio</a></li>
								<li aria-haspopup="true"><a href="#">Categorías&nbsp;&nbsp;<span className="fa fa-caret-down m-0"></span></a>
									<ul className="sub-menu">
										<li aria-haspopup="true"><a href="classNameified.html">Categoría 1</a></li>
										<li aria-haspopup="true"><a href="classNameified-right.html">Categoría 2</a></li>
										<li aria-haspopup="true"><a href="classNameified-right.html">Categoría 3</a></li>
										<li aria-haspopup="true"><a href="classNameified-right.html">Categoría 4</a></li>
									</ul>
								</li>
								<li aria-haspopup="true"><a href="contact.html">Contáctanos<span className="wsarrow"></span></a></li>
								<li aria-haspopup="false" className="d-lg-none mt-5 pb-5 mt-lg-0">
									<span><a className="btn btn-orange" href="ad-posts.html">Anúnciate aquí</a></span>
								</li>
								<li aria-haspopup="false"><a href="about.html">Acerca de</a></li>
							</ul>
							<ul className="mb-0">
								{(logeado) ? (<li aria-haspopup="false" className="mt-5 d-none d-lg-block">
										<span><a className="btn">{nombre}&nbsp;&nbsp;<button style={{padding: '0', color: 'white', background: 'none', outline: 'none', border: 'none'}} className="icon icon-logout" onClick={() => logout()}></button></a></span>
									</li>) : (
									<li aria-haspopup="false" className="mt-5 d-none d-lg-block ">
										<span><a className="btn btn-orange ad-post " href="login">Inicia Sesión</a></span>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>		
    );
};

export default Menu;