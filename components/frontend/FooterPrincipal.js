import React from 'react'

 const FooterPrincipal = () =>{
    return(
        <div className="main-footer">
			<div className="bg-dark-purple text-white">
				<div className="footer-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-12">
								<h6>About</h6>
								<hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate essequasi, veritatis totam voluptas nostrum.Lorem ipsum dolor sit amet, consectetur </p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .</p>
							</div>
							<div className="col-lg-2 col-md-12">
								<h6>Our Services</h6>
								 <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<ul className="list-unstyled mb-0">
									<li><a href="javascript:;">Our Team</a></li>
									<li><a href="javascript:;">Contact US</a></li>
									<li><a href="javascript:;">About</a></li>
									<li><a href="javascript:;">Services</a></li>
									<li><a href="javascript:;">Blog</a></li>
									<li><a href="javascript:;">Terms and Services</a></li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-12">
								<h6>Contact</h6>
								<hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
								<ul className="list-unstyled mb-0">
									<li>
										<a href="#"><i className="fa fa-home mr-3 text-primary"></i> New York, NY 10012, US</a>
									</li>
									<li>
										<a href="#"><i className="fa fa-envelope mr-3 text-primary"></i> info12323@example.com</a></li>
									<li>
										<a href="#"><i className="fa fa-phone mr-3 text-primary"></i> + 01 234 567 88</a>
									</li>
									 <li>
										<a href="#"><i className="fa fa-print mr-3 text-primary"></i> + 01 234 567 89</a>
									</li>
								</ul>
								<ul className="list-unstyled list-inline mt-3">
									<li className="list-inline-item">
									  <a className="btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light">
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
								Copyright © 2019 <a href="#" className="fs-14 text-primary">Claylist</a>. Designed by <a href="#" className="fs-14 text-primary">Spruko</a> All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
 }

 export default FooterPrincipal;