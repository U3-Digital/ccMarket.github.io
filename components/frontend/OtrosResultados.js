import React from 'react';
import OtroResultado from './OtroResultado';

const OtrosResultados = () => {

	const negocios = [
        {
            nombre: 'Negocio 5',
            categoria: 'Categoria 5'
        },
        {
            nombre: 'Negocio 6',
            categoria: 'Categoria 6'
        },
        {
            nombre: 'Negocio 7',
            categoria: 'Categoria 7'
        },
        {
            nombre: 'Negocio 8',
            categoria: 'Categoria 8'
        }
    ];

    return (
        <section className="sptb">
			<div className="container">
				<div className="row">
					<div className="col-xl-9 col-lg-8 col-md-12">
						<div className=" mb-lg-0">
							<div className="">
								<div className="item2-gl ">
									<div className=" mb-0">
										<div className="">
											<div className="bg-white p-5 item2-gl-nav d-flex">
												<h6 className="mb-0 mt-2">Showing 1 to 10 of 30 entries</h6>
												<ul className="nav item2-gl-menu ml-auto">
													<li className=""><a href="#tab-11" className="active show" data-toggle="tab" title="List style"><i className="fa fa-list"></i></a></li>
													<li><a href="#tab-12" data-toggle="tab" className="" title="Grid"><i className="fa fa-th"></i></a></li>
												</ul>
												<div className="d-flex">
													<label className="mr-2 mt-1 mb-sm-1">Sort By:</label>
													<select name="item" className="form-control select-sm w-70 select2">
														<option value="1">Latest</option>
														<option value="2">Oldest</option>
														<option value="3">Price:Low-to-High</option>
														<option value="5">Price:Hight-to-Low</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-content">
										<div className="tab-pane active" id="tab-11">
											{
												negocios.map((negocio) => (
													<OtroResultado
														negocio={negocio}/>
												))
											}
										</div>
										<div className="tab-pane" id="tab-12">
										</div>
									</div>
								</div>
								<div className="center-block text-center">
									<ul className="pagination mb-5">
										<li className="page-item page-prev disabled">
											<a className="page-link" href="#" tabindex="-1">Prev</a>
										</li>
										<li className="page-item active"><a className="page-link" href="#">1</a></li>
										<li className="page-item"><a className="page-link" href="#">2</a></li>
										<li className="page-item"><a className="page-link" href="#">3</a></li>
										<li className="page-item page-next">
											<a className="page-link" href="#">Next</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-lg-4 col-md-12">
						<div className="card">
							<div className="card-body">
								<div className="input-group">
									<input type="text" className="form-control br-tl-3  br-bl-3" placeholder="Escriba algo..."/>
									<div className="input-group-append ">
										<button type="button" className="btn btn-primary br-tr-3  br-br-3">
											Buscar
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Categories</h3>
							</div>
							<div className="card-body">
								<div className="" id="container">
									<div className="filter-product-checkboxs">
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox1" value="option1"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Computer<span className="label label-secondary float-right">14</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox2" value="option2"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Services<span className="label label-secondary float-right">22</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox3" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Jobs<span className="label label-secondary float-right">78</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox4" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">RealEstates<span className="label label-secondary float-right">35</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox5" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Clothing<span className="label label-secondary float-right">23</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox6" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Home & Garden<span className="label label-secondary float-right">14</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Beauty & Spa<span className="label label-secondary float-right">45</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Restaurant<span className="label label-secondary float-right">34</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Travel<span className="label label-secondary float-right">12</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Event<span className="label label-secondary float-right">18</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Health & fitness<span className="label label-secondary float-right">02</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Electronics<span className="label label-secondary float-right">15</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Mobile<span className="label label-secondary float-right">32</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Vehicle<span className="label label-secondary float-right">23</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Education<span className="label label-secondary float-right">19</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Constructions<span className="label label-secondary float-right">12</span></a>
											</span>
										</label>
										<label className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" name="checkbox7" value="option3"/>
											<span className="custom-control-label">
												<a href="#" className="text-dark">Pets y Animals<span className="label label-secondary float-right">05</span></a>
											</span>
										</label>
									</div>

								</div>
							</div>
							<div className="card-header border-top">
								<h3 className="card-title">Price Range</h3>
							</div>
							<div className="card-body">
								<h6>
								   <label for="price">Price Range:</label>
								   <input type="text" id="price"/>
								</h6>
								<div id="mySlider"></div>
							</div>
							<div className="card-header border-top">
								<h3 className="card-title">Condition</h3>
							</div>
							<div className="card-body">
								<div className="filter-product-checkboxs">
									<label className="custom-control custom-checkbox mb-2">
										<input type="checkbox" className="custom-control-input" name="checkbox1" value="option1"/>
										<span className="custom-control-label">
											New
										</span>
									</label>
									<label className="custom-control custom-checkbox mb-0">
										<input type="checkbox" className="custom-control-input" name="checkbox2" value="option2"/>
										<span className="custom-control-label">
											Used
										</span>
									</label>
								</div>
							</div>
							<div className="card-header border-top">
								<h3 className="card-title">Posted By</h3>
							</div>
							<div className="card-body">
								<div className="filter-product-checkboxs">
									<label className="custom-control custom-checkbox mb-2">
										<input type="checkbox" className="custom-control-input" name="checkbox1" value="option1"/>
										<span className="custom-control-label">
											Dealer
										</span>
									</label>
									<label className="custom-control custom-checkbox mb-2">
										<input type="checkbox" className="custom-control-input" name="checkbox2" value="option2"/>
										<span className="custom-control-label">
											Individual
										</span>
									</label>
									<label className="custom-control custom-checkbox mb-0">
										<input type="checkbox" className="custom-control-input" name="checkbox2" value="option2"/>
										<span className="custom-control-label">
											Reseller
										</span>
									</label>
								</div>
							</div>
							<div className="card-footer">
								<a href="#" className="btn btn-secondary btn-block">Apply Filter</a>
							</div>
						</div>
						<div className="card mb-0">
							<div className="card-header">
								<h3 className="card-title">Shares</h3>
							</div>
							<div className="card-body product-filter-desc">
								<div className="product-filter-icons text-center">
									<a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a>
									<a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a>
									<a href="#" className="google-bg"><i className="fa fa-google"></i></a>
									<a href="#" className="dribbble-bg"><i className="fa fa-dribbble"></i></a>
									<a href="#" className="pinterest-bg"><i className="fa fa-pinterest"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default OtrosResultados;