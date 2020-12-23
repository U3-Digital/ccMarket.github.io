import React, { useState, useContext } from 'react';
import BusquedaContext from '../../context/busqueda/BusquedaContext';
import firebase from '../firebase';
import NuevaResena from './reviews/NuevaResena';
const DetallesNegocio = () => {
  const busquedaContext = useContext(BusquedaContext);
  const { idDetalles } = busquedaContext;
  const [negocioActual, setNegocioActual] = useState({ nombreNegocio: '', direccionNegocio: '', nombreResponsable: '', numeroResponsable: '', emailResponsable: '', categorias: '', palabrasClave: '', horarioApertura: '', horarioCierre: '' });
  const [loading, setLoading] = useState(true);
  const [userActual, setUserActual] = useState(false)

  const negocioQuery = firebase.firestore().collection('negocios').doc(idDetalles);
  	firebase.auth().onAuthStateChanged(function (user) {
		if(user){
			setUserActual(true);
		}else{
			setUserActual(false);
		}
	})
  if (loading) {
    negocioQuery.get().then((document) => {
      if (!document.exists) {
        console.log('No existe el documento con el id especificado');
      } else {
        console.log(document.data());
        const negocio = {
          nombreNegocio: document.data().nombreNegocio,
          direccionNegocio: document.data().direccionNegocio,
          nombreResponsable: document.data().nombreResponsable,
          numeroResponsable: document.data().numeroResponsable,
          emailResponsable: document.data().emailResponsable,
          categorias: document.data().categorias,
          palabrasClave: document.data().palabrasClave,
          horarioApertura: document.data().horarioApertura,
          horarioCierre: document.data().horarioCierre
        }

        setNegocioActual(negocio);
        setLoading(false);
      }

    }).catch((error) => {
      console.log(error);
    });
  }

  if (loading) {
    return (
      <div className="row m-5">
        <div className="col-12 text-center">
          <div className="spinner-border text-primary"></div>
        </div>
      </div>
    );
  }

	return (
		<section className="sptb">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8 col-md-12">
						<div className="card overflow-hidden">	
							<div className="card-body h-100">
								<div className="item-det mb-4">
									<a href="#" className="text-dark">
										<h3>{negocioActual.nombreNegocio}</h3>
									</a>
									<div className=" d-flex">
										<ul className="d-flex mb-0">
											<li className="mr-5">
												<a href="#" className="icons">
													<i className="icon icon-briefcase text-muted mr-1" /> {negocioActual.categorias.split('-')[0]}
												</a>
											</li>
											<li className="mr-5">
												<a href="#" className="icons">
													<i className="icon icon-location-pin text-muted mr-1" /> {negocioActual.direccionNegocio}
												</a>
											</li>
										</ul>
										<div className="rating-stars d-flex mr-5">
											<input
												type="number"
												readOnly
												className="rating-value star"
												name="rating-stars-value"
												id="rating-stars-value"
												value="4"
											/>
											<div className="rating-stars-container mr-2">
												<div className="rating-star sm">
													<i className="fa fa-star" />
												</div>
												<div className="rating-star sm">
													<i className="fa fa-star" />
												</div>
												<div className="rating-star sm">
													<i className="fa fa-star" />
												</div>
												<div className="rating-star sm">
													<i className="fa fa-star" />
												</div>
												<div className="rating-star sm">
													<i className="fa fa-star" />
												</div>
											</div>
											4.0
										</div>
										<div className="rating-stars d-flex">
											<div className="rating-stars-container mr-2">
												<div className="rating-star sm">
													<i className="fa fa-heart" />
												</div>
											</div>
											135
										</div>
									</div>
								</div>
								<div className="product-slider">
									<div id="carousel" className="carousel slide" data-ride="carousel">
										<div className="arrow-ribbon2 bg-primary">$539</div>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img src="img/products/products/v1.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v2.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v3.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v4.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v1.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v1.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v2.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v3.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v4.jpg" alt="img" />
											</div>
											<div className="carousel-item">
												<img src="img/products/products/v1.jpg" alt="img" />
											</div>
										</div>
										<a
											className="carousel-control-prev"
											href="#carousel"
											role="button"
											data-slide="prev"
										>
											<i className="fa fa-angle-left" aria-hidden="true" />
										</a>
										<a
											className="carousel-control-next"
											href="#carousel"
											role="button"
											data-slide="next"
										>
											<i className="fa fa-angle-right" aria-hidden="true" />
										</a>
									</div>
									<div className="clearfix">
										<div id="thumbcarousel" className="carousel slide" data-interval="false">
											<div className="carousel-inner">
												<div className="carousel-item active">
													<div data-target="#carousel" data-slide-to="0" className="thumb">
														<img src="img/products/v1.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="1" className="thumb">
														<img src="img/products/v2.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="2" className="thumb">
														<img src="img/products/v3.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="3" className="thumb">
														<img src="img/products/v4.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="4" className="thumb">
														<img src="img/products/v1.png" alt="img" />
													</div>
												</div>
												<div className="carousel-item ">
													<div data-target="#carousel" data-slide-to="0" className="thumb">
														<img src="img/products/v1.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="1" className="thumb">
														<img src="img/products/v2.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="2" className="thumb">
														<img src="img/products/v3.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="3" className="thumb">
														<img src="img/products/v4.png" alt="img" />
													</div>
													<div data-target="#carousel" data-slide-to="4" className="thumb">
														<img src="img/products/v1.png" alt="img" />
													</div>
												</div>
											</div>
											<a
												className="carousel-control-prev"
												href="#thumbcarousel"
												role="button"
												data-slide="prev"
											>
												<i className="fa fa-angle-left" aria-hidden="true" />
											</a>
											<a
												className="carousel-control-next"
												href="#thumbcarousel"
												role="button"
												data-slide="next"
											>
												<i className="fa fa-angle-right" aria-hidden="true" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Description</h3>
							</div>
							<div className="card-body">
								<div className="mb-4">
									<p>
										At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
										praesentium voluptatum deleniti atcorrupti quos dolores et quas molestias
										excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
										officia deserunt mollitia animi, id est laborum et dolorum fuga.
									</p>
									<p>
										On the other hand, we denounce with righteous indignation and dislike men who
										are so beguiled and demoraliz the charms of pleasure of the moment, so blinded
										by desire, that they cannot foresee the pain and trouble thena bound to ensue;
										and equal blame belongs to those who fail in their duty through weakness of
										will, which is the same as saying through shrinking from toil and pain.
									</p>
								</div>
								<h4 className="mb-4">Specifications</h4>
								<div className="row">
									<div className="col-xl-12 col-md-12">
										<div className="table-responsive">
											<table className="table row table-borderless w-100 m-0 text-nowrap ">
												<tbody className="col-lg-12 col-xl-6 p-0">
													<tr>
														<td>
															<span className="font-weight-bold">Fuel Type :</span> Diesel
														</td>
													</tr>
													<tr>
														<td>
															<span className="font-weight-bold">Breaks :</span> Front ,
															Rear
														</td>
													</tr>
													<tr>
														<td>
															<span className="font-weight-bold">Seating :</span> 5
															members
														</td>
													</tr>
													<tr>
														<td>
															<span className="font-weight-bold">Colors :</span> Red ,
															pink, Gray
														</td>
													</tr>
												</tbody>
												<tbody className="col-lg-12 col-xl-6 p-0">
													<tr>
														<td>
															<span className="font-weight-bold">Air Bags :</span>{' '}
															Available
														</td>
													</tr>
													<tr>
														<td>
															<span className="font-weight-bold">Colors :</span> Red ,
															pink, Gray
														</td>
													</tr>
													<tr>
														<td>
															<span className="font-weight-bold">Engine :</span> F8D
														</td>
													</tr>
													<tr>
														<td>
															<span className="font-weight-bold">Power Windows :</span>
															Available
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div className="pt-4 pb-4 pl-5 pr-5 border-top border-top">
								<div className="list-id">
									<div className="row">
										<div className="col">
											<a className="mb-0">Classified ID : #8256358</a>
										</div>
										<div className="col col-auto">
											Posted By <a className="mb-0 font-weight-bold">Individual</a> / 21st Dec
											2018
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="icons">
									<a href="#" className="btn btn-info icons">
										<i className="icon icon-share mr-1" /> Share Ad
									</a>
									<a href="#" className="btn btn-primary icons">
										<i className="icon icon-heart  mr-1" /> 678
									</a>
									<a href="#" className="btn btn-secondary icons">
										<i className="icon icon-printer  mr-1" /> Print
									</a>
								</div>
							</div>
						</div>
						<h3 className="mb-5 mt-4">Related Posts</h3>
						<div id="myCarousel5" className="owl-carousel owl-carousel-icons3">
							<div className="item">
								<div className="card">
									<div className="ribbon ribbon-top-left text-danger">
										<span className="bg-danger">Negotiable</span>
									</div>
									<div className="item-card7-imgs">
										<a href="classified.html" />
										<img src="img/products/products/ed1.jpg" alt="img" className="cover-image" />
									</div>
									<div className="item-card7-overlaytext">
										<a href="classified.html" className="text-white">
											Education
										</a>
										<h4 className="font-weight-semibold mb-0">$389</h4>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="classified.html" className="text-dark">
												<h4 className="font-weight-semibold">Record Writing</h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="card">
									<div className="ribbon ribbon-top-left text-primary">
										<span className="bg-primary">featured</span>
									</div>
									<div className="item-card7-imgs">
										<a href="classified.html" />
										<img src="img/products/products/v1.jpg" alt="img" className="cover-image" />
									</div>
									<div className="item-card7-overlaytext">
										<a href="classified.html" className="text-white">
											Cars
										</a>
										<h4 className=" mb-0">$854</h4>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="classified.html" className="text-dark">
												<h4 className="font-weight-semibold">Geep Automobiles</h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="card">
									<div className="item-card7-img">
										<div className="item-card7-imgs">
											<a href="classified.html" />
											<img
												src="img/products/products/j1.jpg"
												alt="img"
												className="cover-image"
											/>
										</div>
										<div className="item-card7-overlaytext">
											<a href="classified.html" className="text-white">
												Furniture
											</a>
											<h4 className="font-weight-semibold mb-0">$786</h4>
										</div>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="classified.html" className="text-dark">
												<h4 className="font-weight-semibold">Marketing Executive</h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="card">
									<div className="ribbon ribbon-top-left text-danger">
										<span className="bg-danger">Collection</span>
									</div>
									<div className="item-card7-img">
										<div className="item-card7-imgs">
											<a href="classified.html" />
											<img
												src="img/products/products/f4.jpg"
												alt="img"
												className="cover-image"
											/>
										</div>
										<div className="item-card7-overlaytext">
											<a href="classified.html" className="text-white">
												Restaurant
											</a>
											<h4 className="font-weight-semibold mb-0">$539</h4>
										</div>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="rclassified.html" className="text-dark">
												<h4 className="font-weight-semibold">Houge Restaurant</h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="card">
									<div className="item-card7-img">
										<div className="item-card7-imgs">
											<a href="classified.html" />
											<img
												src="img/products/products/pe1.jpg"
												alt="img"
												className="cover-image"
											/>
										</div>
										<div className="item-card7-overlaytext">
											<a href="classified.html" className="text-white">
												Pets & Animals
											</a>
											<h4 className="font-weight-semibold mb-0">$925</h4>
										</div>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="classified.html" className="text-dark">
												<h4 className="font-weight-semibold">Care Brohzm</h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="card">
									<div className="ribbon ribbon-top-left text-success">
										<span className="bg-success">Free Shipping</span>
									</div>
									<div className="item-card7-img">
										<div className="item-card7-imgs">
											<a href="classified.html" />
											<img
												src="img/products/products/h5.jpg"
												alt="img"
												className="cover-image"
											/>
										</div>
										<div className="item-card7-overlaytext">
											<a href="classified.html" className="text-white">
												Homes
											</a>
											<h4 className="font-weight-semibold mb-0">$925</h4>
										</div>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="classified.html" className="text-dark">
												<h4 className="font-weight-semibold"> Single Flat House</h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="card">
									<div className="item-card7-img">
										<div className="item-card7-imgs">
											<a href="classified.html" />
											<img
												src="img/products/products/ed2.jpg"
												alt="img"
												className="cover-image"
											/>
										</div>
										<div className="item-card7-overlaytext">
											<a href="classified.html" className="text-white">
												Education
											</a>
											<h4 className="font-weight-semibold mb-0">$378</h4>
										</div>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="classified.html" className="text-dark">
												<h4 className="font-weight-semibold">Digital Marketing Training </h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="card">
									<div className="ribbon ribbon-top-left text-primary">
										<span className="bg-primary">featured</span>
									</div>
									<div className="item-card7-img">
										<div className="item-card7-imgs">
											<a href="classified.html" />
											<img
												src="img/products/products/j3.jpg"
												alt="img"
												className="cover-image"
											/>
										</div>
										<div className="item-card7-overlaytext">
											<a href="classified.html" className="text-white">
												Spa
											</a>
											<h4 className="font-weight-semibold mb-0">$836</h4>
										</div>
									</div>
									<div className="card-body">
										<div className="item-card7-desc">
											<a href="classified.html" className="text-dark">
												<h4 className="font-weight-semibold">Designers</h4>
											</a>
										</div>
										<div className="item-card7-text">
											<ul className="icon-card mb-0">
												<li>
													<a href="#" className="icons">
														<i className="icon icon-location-pin text-muted mr-1" /> Los
														Angles
													</a>
												</li>
												<li>
													<a href="#" className="icons">
														<i className="icon icon-event text-muted mr-1" /> 5 hours ago
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-user text-muted mr-1" /> Sally Peake
													</a>
												</li>
												<li className="mb-0">
													<a href="#" className="icons">
														<i className="icon icon-phone text-muted mr-1" /> 5-67987608
													</a>
												</li>
											</ul>
											<p className="mb-0">
												Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Rating And Reviews</h3>
							</div>
							
							<div className="card-body p-0">
								<div className="media mt-0 p-5">
									<div className="d-flex mr-3">
										<a href="#">
											<img
												className="media-object brround"
												alt="64x64"
												src="img/faces/male/1.jpg"
											/>
										</a>
									</div>
									<div className="media-body">
										<h5 className="mt-0 mb-1 font-weight-semibold">
											Joanne Scott
											<span
												className="fs-14 ml-0"
												data-toggle="tooltip"
												data-placement="top"
												title="verified"
											>
												<i className="fa fa-check-circle-o text-success" />
											</span>
											<span className="fs-14 ml-2">
												4.5 <i className="fa fa-star text-yellow" />
											</span>
										</h5>
										<small className="text-muted">
											<i className="fa fa-calendar" /> Dec 21st{' '}
											<i className=" ml-3 fa fa-clock-o" />
											13.00 <i className=" ml-3 fa fa-map-marker" /> Brezil
										</small>
										<p className="font-13  mb-2 mt-2">
											Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum
											quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
											modi tempora incidunt ut labore et nostrud exercitation ullamco laboris
											commodo consequat.
										</p>
										<a href="#" className="mr-2">
											<span className="badge badge-primary">Helpful</span>
										</a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#Comment">
											<span>Comment</span>
										</a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#report">
											<span>Report</span>
										</a>
										<div className="media mt-5">
											<div className="d-flex mr-3">
												<a href="#">
													<img
														className="media-object brround"
														alt="64x64"
														src="img/faces/female/2.jpg"
													/>
												</a>
											</div>
											<div className="media-body">
												<h5 className="mt-0 mb-1 font-weight-semibold">
													Rose Slater
													<span
														className="fs-14 ml-0"
														data-toggle="tooltip"
														data-placement="top"
														title="verified"
													>
														<i className="fa fa-check-circle-o text-success" />
													</span>
												</h5>
												<small className="text-muted">
													<i className="fa fa-calendar" /> Dec 22st
													<i className=" ml-3 fa fa-clock-o" /> 6.00
													<i className=" ml-3 fa fa-map-marker" /> Brezil
												</small>
												<p className="font-13  mb-2 mt-2">
													Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
													commodo Ut enim ad minima veniam, quis nostrum exercitationem ullam
													corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
													consequatur consequat.
												</p>
												<a href="" data-toggle="modal" data-target="#Comment">
													<span className="badge badge-default">Comment</span>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="media p-5 border-top mt-0">
									<div className="d-flex mr-3">
										<a href="#">
											<img
												className="media-object brround"
												alt="64x64"
												src="img/faces/male/3.jpg"
											/>
										</a>
									</div>
									<div className="media-body">
										<h5 className="mt-0 mb-1 font-weight-semibold">
											Edward
											<span
												className="fs-14 ml-0"
												data-toggle="tooltip"
												data-placement="top"
												title="verified"
											>
												<i className="fa fa-check-circle-o text-success" />
											</span>
											<span className="fs-14 ml-2">
												4 <i className="fa fa-star text-yellow" />
											</span>
										</h5>
										<small className="text-muted">
											<i className="fa fa-calendar" /> Dec 21st{' '}
											<i className=" ml-3 fa fa-clock-o" />
											16.35 <i className=" ml-3 fa fa-map-marker" /> UK
										</small>
										<p className="font-13  mb-2 mt-2">
											Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum
											quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
											modi tempora incidunt ut labore et nostrud exercitation ullamco laboris
											commodo consequat.
										</p>
										<a href="#" className="mr-2">
											<span className="badge badge-primary">Helpful</span>
										</a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#Comment">
											<span>Comment</span>
										</a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#report">
											<span>Report</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						{userActual ? (<NuevaResena key={idDetalles} id= {idDetalles}/>) : null}
					</div>

					<div className="col-xl-4 col-lg-4 col-md-12">
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Posted By</h3>
							</div>
							<div className="card-body  item-user">
								<div className="profile-pic mb-0">
									<img src="img/faces/male/25.jpg" className="brround avatar-xxl" alt="user" />
									<div>
										<a href="userprofile.html" className="text-dark">
											<h4 className="mt-3 mb-1 font-weight-semibold">Robert McLean</h4>
										</a>
										<span className="text-muted">Member Since November 2008</span>
										<h6 className="mt-2 mb-0">
											<a href="#" className="btn btn-primary btn-sm">
												See All Ads
											</a>
										</h6>
									</div>
								</div>
							</div>
							<div className="card-body item-user">
								<h4 className="mb-4">Contact Info</h4>
								<div>
									<h6>
										<span className="font-weight-semibold">
											<i className="fa fa-envelope mr-3 mb-2" />
										</span>
										<a href="#" className="text-body">
											robert123@gmail.com
										</a>
									</h6>
									<h6>
										<span className="font-weight-semibold">
											<i className="fa fa-phone mr-3  mb-2" />
										</span>
										<a href="#" className="text-primary">
											0-235-657-24587
										</a>
									</h6>
									<h6>
										<span className="font-weight-semibold">
											<i className="fa fa-link mr-3 " />
										</span>
										<a href="#" className="text-primary">
											http://spruko.com/
										</a>
									</h6>
								</div>
								<div className=" item-user-icons mt-4 text-center">
									<a href="#" className="facebook-bg mt-0">
										<i className="fab fa-facebook-f" />
									</a>
                  {'  '}
									<a href="#" className="twitter-bg">
										<i className="fab fa-twitter" />
									</a>
                  {'  '}
									<a href="#" className="google-bg">
										<i className="fab fa-google" />
									</a>
                  {'  '}
									<a href="#" className="dribbble-bg">
										<i className="fab fa-dribbble" />
									</a>
								</div>
							</div>
							<div className="card-footer">
								<div className="text-left">
									<a href="#" className="btn  btn-info">
										<i className="fa fa-envelope" /> Chat
									</a>
									<a href="#" className="btn btn-primary" data-toggle="modal" data-target="#contact">
										<i className="fa fa-user" /> Contact Me
									</a>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Keywords</h3>
							</div>
							<div className="card-body product-filter-desc">
								<div className="product-tags clearfix">
									<ul className="list-unstyled mb-0">
										<li>
											<a href="#">Vehicle</a>
										</li>
										<li>
											<a href="#">Model Cars</a>
										</li>
										<li>
											<a href="#">Best Car</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Shares</h3>
							</div>
							<div className="card-body product-filter-desc">
								<div className="product-filter-icons text-center">
									<a href="#" className="facebook-bg">
										<i className="fa fa-facebook" />
									</a>
									<a href="#" className="twitter-bg">
										<i className="fa fa-twitter" />
									</a>
									<a href="#" className="google-bg">
										<i className="fa fa-google" />
									</a>
									<a href="#" className="dribbble-bg">
										<i className="fa fa-dribbble" />
									</a>
									<a href="#" className="pinterest-bg">
										<i className="fa fa-pinterest" />
									</a>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Map location</h3>
							</div>
							<div className="card-body">
								<div className="map-header">
									<div className="map-header-layer" id="map2" />
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Search Ads</h3>
							</div>
							<div className="card-body">
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										id="search-text"
										placeholder="What are you looking for?"
									/>
								</div>
								<div className="form-group">
									<select
										name="country"
										id="select-countries"
										className="form-control custom-select select2-show-search"
									>
										<option value="1" selected>
											All Categories
										</option>
										<option value="2">RealEstate</option>
										<option value="3">Restaurant</option>
										<option value="4">Beauty</option>
										<option value="5">Jobs</option>
										<option value="6">Services</option>
										<option value="7">Vehicle</option>
										<option value="8">Education</option>
										<option value="9">Electronics</option>
										<option value="10">Pets & Animals</option>
										<option value="11">Computer</option>
										<option value="12">Mobile</option>
										<option value="13">Events</option>
										<option value="14">Travel</option>
										<option value="15">Clothing</option>
									</select>
								</div>
								<div>
									<a href="#" className="btn  btn-primary">
										Search
									</a>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Latest Products</h3>
							</div>
							<div className="card-body ">
								<ul className="vertical-scroll">
									<li className="news-item">
										<table>
											<tr>
												<td>
													<img
														src="img/products/1.png"
														alt="image"
														className="w-8 border"
													/>
												</td>
												<td>
													<h5 className="mb-1 ">Best New Model Watch</h5>
													<a href="#" className="btn-link">
														View Details
													</a>
													<span className="float-right font-weight-bold">$17</span>
												</td>
											</tr>
										</table>
									</li>
									<li className="news-item">
										<table>
											<tr>
												<td>
													<img
														src="img/products/2.png"
														alt="image"
														className="w-8 border"
													/>
												</td>
												<td>
													<h5 className="mb-1 ">Trending New Model Watches</h5>
													<a href="#" className="btn-link">
														View Details
													</a>
													<span className="float-right font-weight-bold">$17</span>
												</td>
											</tr>
										</table>
									</li>
									<li className="news-item">
										<table>
											<tr>
												<td>
													<img
														src="img/products/3.png"
														alt="image"
														className="w-8 border"
													/>
												</td>
												<td>
													<h5 className="mb-1 ">Best New Model Watch</h5>
													<a href="#" className="btn-link">
														View Details
													</a>
													<span className="float-right font-weight-bold">$17</span>
												</td>
											</tr>
										</table>
									</li>
									<li className="news-item">
										<table>
											<tr>
												<td>
													<img
														src="img/products/4.png"
														alt="image"
														className="w-8 border"
													/>
												</td>
												<td>
													<h5 className="mb-1 ">Trending New Model Watches</h5>
													<a href="#" className="btn-link">
														View Details
													</a>
													<span className="float-right font-weight-bold">$17</span>
												</td>
											</tr>
										</table>
									</li>
									<li className="news-item">
										<table>
											<tr>
												<td>
													<img
														src="img/products/5.png"
														alt="image"
														className="w-8 border"
													/>
												</td>
												<td>
													<h5 className="mb-1 ">Best New Model Watch</h5>
													<a href="#" className="btn-link">
														View Details
													</a>
													<span className="float-right font-weight-bold">$17</span>
												</td>
											</tr>
										</table>
									</li>
									<li className="news-item">
										<table>
											<tr>
												<td>
													<img
														src="img/products/6.png"
														alt="image"
														className="w-8 border"
													/>
												</td>
												<td>
													<h5 className="mb-1 ">Best New Model Shoes</h5>
													<a href="#" className="btn-link">
														View Details
													</a>
													<span className="float-right font-weight-bold">$17</span>
												</td>
											</tr>
										</table>
									</li>
									<li className="news-item">
										<table>
											<tr>
												<td>
													<img
														src="img/products/7.png"
														alt="image"
														className="w-8 border"
													/>
												</td>
												<td>
													<h5 className="mb-1 ">Trending New Model Shoes</h5>
													<a href="#" className="btn-link">
														View Details
													</a>
													<span className="float-right font-weight-bold">$17</span>
												</td>
											</tr>
										</table>
									</li>
								</ul>
							</div>
						</div>

						<div className="card mb-0">
							<div className="card-header">
								<h3 className="card-title">Latest Seller Ads</h3>
							</div>
							<div className="card-body">
								<div className="rated-products">
									<ul className="vertical-scroll">
										<li className="item">
											<div className="media m-0 mt-0 p-5">
												<img className="mr-4" src="img/products/toys.png" alt="img" />
												<div className="media-body">
													<h4 className="mt-2 mb-1">Kids Toys</h4>
													<span className="rated-products-ratings">
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
													</span>
													<div className="h5 mb-0 font-weight-semibold mt-1">$17 - $29</div>
												</div>
											</div>
										</li>
										<li className="item">
											<div className="media p-5 mt-0">
												<img className="mr-4" src="img/products/1.png" alt="img" />
												<div className="media-body">
													<h4 className="mt-2 mb-1">Leather Watch</h4>
													<span className="rated-products-ratings">
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star-o text-warning"> </i>
													</span>
													<div className="h5 mb-0 font-weight-semibold mt-1">$22 - $45</div>
												</div>
											</div>
										</li>
										<li className="item">
											<div className="media p-5 mt-0">
												<img className=" mr-4" src="img/products/4.png" alt="img" />
												<div className="media-body">
													<h4 className="mt-2 mb-1">Digital Watch</h4>
													<span className="rated-products-ratings">
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star-half-o text-warning"> </i>
													</span>
													<div className="h5 mb-0 font-weight-semibold mt-1">$35 - $72</div>
												</div>
											</div>
										</li>
										<li className="item">
											<div className="media p-5 mt-0">
												<img className=" mr-4" src="img/products/6.png" alt="img" />
												<div className="media-body">
													<h4 className="mt-2 mb-1">Sports Shoe</h4>
													<span className="rated-products-ratings">
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star-half-o text-warning"> </i>
														<i className="fa fa-star-o text-warning"> </i>
													</span>
													<div className="h5 mb-0 font-weight-semibold mt-1">$12 - $21</div>
												</div>
											</div>
										</li>
										<li className="item">
											<div className="media  mb-0 p-5 mt-0">
												<img className=" mr-4" src="img/products/8.png" alt="img" />
												<div className="media-body">
													<h4 className="mt-2 mb-1">Ladies shoes</h4>
													<span className="rated-products-ratings">
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star text-warning"> </i>
														<i className="fa fa-star-o text-warning"> </i>
														<i className="fa fa-star-o text-warning"> </i>
													</span>
													<div className="h5 mb-0 font-weight-semibold mt-1">$89 - $97</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetallesNegocio;
