import React from 'react';

const 
Menu = () => {
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
						<a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
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
								<li aria-haspopup="true"><a href="#" className="active">Inicio</a></li>
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
								<li aria-haspopup="false" className="mt-5 d-none d-lg-block ">
									<span><a className="btn btn-orange ad-post " href="ad-posts.html">Anúnciate aquí</a></span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
		

		
    );
};

export default Menu;