import React from 'react';

const Localizaciones = () => {
    return (
        <section className="sptb bg-white">
			<div className="container">
				<div className="section-title center-block text-center">
					<h2>Best Rated Locations</h2>
					<p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
				</div>
                <div className="row">
					<div className="col-12 col-md-12 col-lg-12 col-xl-6">
						<div className="row">
							<div className="col-sm-12 col-lg-6 col-md-6 ">
								<div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/germany.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">44,327<span><i className="fa fa-map-marker mr-1 text-primary"></i>GERMANY</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6 ">
								<div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/london.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">52,145<span><i className="fa fa-map-marker mr-1 text-primary"></i> LONDON</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6 ">
							    <div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/austerlia.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">63,263<span><i className="fa fa-map-marker text-primary mr-1"></i>AUSTERLIA</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6 ">
								<div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/chicago.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">36,485<span><i className="fa fa-map-marker text-primary mr-1"></i>CHICAGO</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-xl-6 col-sm-12">
						<div className="item-card overflow-hidden">
							<div className="item-card-desc">
								<div className="card overflow-hidden">
									<div className="card-img">
										<img src="../img/locations/losangels-1.jpg"  alt="img" className="cover-image"/>
									</div>
									<div className="item-card-text">
										<h4 className="mb-0">64,825<span><i className="fa fa-map-marker text-primary mr-1"></i>WASHINGTON</span></h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Localizaciones;
