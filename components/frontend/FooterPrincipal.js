import React from 'react'

 const FooterPrincipal = () =>{
    return(
        <div className="main-footer">
			<div className="bg-dark-purple text-white">
				<div className="footer-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-12">
								<h6>Sobre</h6>
								<hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<p>CC-Market es un servicio de directorio online dirigido a negocios de la zona noroeste del estado de Chihuahua </p>
                                <p>U3 digital es ...... no se :'c</p>
							</div>
							<div className="col-lg-2 col-md-12">
								<h6>Más de U3 Digital</h6>
								 <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<ul className="list-unstyled mb-0">
									<li><a href="https://u3digital.com.mx/">U3 Digital</a></li>
									<li><a href="javascript:;">U3 Citas</a></li>
									<li><a href="javascript:;">U3 Restaurantes</a></li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-12">
								<h6>Contacto</h6>
								<hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<ul className="list-unstyled mb-0">
									<li>
										<a href="#"><i className="fa fa-home mr-3 text-primary"></i>Rep. Colombia </a>
									</li>
									<li>
										<a href="#"><i className="fa fa-envelope mr-3 text-primary"></i> info@u3digital.com</a></li>
									<li>
										<a href="#"><i className="fa fa-phone mr-3 text-primary"></i> 625 122 14 38</a>
									</li>
									
								</ul>
								<ul className="list-unstyled list-inline mt-3">
									<li className="list-inline-item">
									  <a className="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light" href="https://www.facebook.com/u3digital">
										<i className="fa fa-facebook bg-facebook"></i>
									  </a>
									</li>
									<li className="list-inline-item">
									  <a className="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
										<i className="fa fa-twitter bg-info"></i>
									  </a>
									</li>
									<li className="list-inline-item">
									  <a className="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
										<i className="fa fa-google-plus bg-danger"></i>
									  </a>
									</li>
									<li className="list-inline-item">
									  <a className="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
										<i className="fa fa-linkedin bg-linkedin"></i>
									  </a>
									</li>
								</ul>
							</div>
							<div className="col-lg-4 col-md-12">
								<h6>Subscribe</h6>
								<hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<div className="clearfix"></div>
								<div className="input-group w-70">
									<input type="text" className="form-control br-tl-3  br-bl-3 " placeholder="Email"/>
									<div className="input-group-append ">
										<button type="button" className="btn btn-primary br-tr-3  br-br-3"> Subscribe </button>
									</div>
								</div>
								<h6 className="mb-0 mt-5">Payments</h6>
								<hr className="deep-purple  text-primary accent-2 mb-2 mt-3 d-inline-block mx-auto"/>
								<div className="clearfix"></div>
								<ul className="footer-payments">
									<li className="pl-0"><a href="javascript:;"><i className="fa fa-cc-amex text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-cc-visa text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-credit-card-alt text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-cc-mastercard text-muted" aria-hidden="true"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-cc-paypal text-muted" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-dark-purple text-white p-0">
					<div className="container">
						<div className="row d-flex">
							<div className="col-lg-12 col-sm-12 mt-3 mb-3 text-center ">
								Copyright © 2020 <a href="#" className="fs-14 text-primary">U3 Digital</a>. Derechos reservados.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
 }

 export default FooterPrincipal;