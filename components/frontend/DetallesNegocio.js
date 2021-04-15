import React, { useState, useContext } from 'react';
import BusquedaContext from '../../context/busqueda/BusquedaContext';
import firebase from '../firebase';
import NuevaResena from './reviews/NuevaResena';
import TablaReviews from './reviews/TablaReviews';
import SliderDetalles from './sliderdetalles/SliderDetalles';
import StarRatings from 'react-star-ratings';
import { useQuery, gql } from '@apollo/client';

const OBTENER_NEGOCIO = gql`
query obtenerNegocio($id: ID!) {
  obtenerNegocio(id: $id) {
    id
    nombre
    direccion
    telefonoNegocio
    nombreResponsable
    numeroResponsable
    emailResponsable
    categorias {
      categoria
    }
    palabrasClave {
      palabraClave
    }
    horarioApertura
    horarioCierre
    cliente
    descripcion
    ubicacion
  }
}`;

const DetallesNegocio = ({id}) => {
  const busquedaContext = useContext(BusquedaContext);
  const { idDetalles } = busquedaContext;
  const [negocioActual, setNegocioActual] = useState({
    nombreNegocio: '',
    direccionNegocio: '',
    nombreResponsable: '',
    numeroResponsable: '',
    emailResponsable: '',
    categorias: [{categoria: ''}],
    palabrasClave: '',
    horarioApertura: '',
    horarioCierre: '',
    descripcionNegocio: ''
  });

  const { data, loading, error } = useQuery(OBTENER_NEGOCIO, {
    variables: {
      id: id
    }
  });

  // const [ loading, setLoading ] = useState(true);
  const [userActual, setUserActual] = useState(false);
  const [imagenes, setImagenes] = useState([]);
  const [imagenActual, setImagenActual] = useState('');
  const [imagesLoading, setImagesLoading] = useState(true);

 

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setUserActual(true);
    } else {
      setUserActual(false);
    }
  });
  const imagesRef = firebase.storage().ref(`negocios/${id}/`);
  if (loading) {
    return (
      <div className="row m-5">
        <div className="col-12 text-center">
          <div className="spinner-border text-primary" />
        </div>
      </div>
    );
  }
  const {obtenerNegocio} = data;
  if (negocioActual.nombreNegocio === '') {

    console.log(data);
    const { nombre, direccion, nombreResponsable, numeroResponsable, emailResponsable, categorias, palabrasClave, horarioApertura, horarioCierre, telefonoNegocio, descripcion } = data.obtenerNegocio;
    // negocioActual.nombre = nombre;
    const negocio = {
      nombreNegocio: nombre,
      direccionNegocio: direccion,
      nombreResponsable: nombreResponsable,
      numeroResponsable: numeroResponsable,
      emailResponsable: emailResponsable,
      categorias,
      palabrasClave: palabrasClave,
      horarioApertura: horarioApertura,
      horarioCierre: horarioCierre,
      telefonoNegocio: telefonoNegocio,
      descripcionNegocio: descripcion
    };

    console.log(negocio);

    setNegocioActual(negocio);


  }

  const tempImagenes = [];

  if (imagesLoading) {
    setImagesLoading(false);
    const cosa = async () => {

      for (let i = 1; i < 4; i++) {
        await imagesRef.child(`${i}`).getDownloadURL().then((url) => {
          if (i === 1) {
            setImagenActual(url);
          }
          tempImagenes.push(url);
        }).catch((error) => {
          console.log(error);
        });
        console.log('get descargado');
      }
      setImagenes(tempImagenes);

    }
    cosa();
  }
    
  function previewImage(index) {
    setImagenActual(imagenes[index]);
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
                          <i className="icon icon-briefcase text-muted mr-1" />{' '}
                          {negocioActual.categorias[0].categoria}
                        </a>
                      </li>
                      <li className="mr-5">
                        <a href="#" className="icons">
                          <i className="icon icon-location-pin text-muted mr-1" />{' '}
                          {negocioActual.direccionNegocio}
                        </a>
                      </li>
                    </ul>
                    <div className="rating-stars d-flex mr-5">
                      <div className="rating-stars-container mr-2">
                        <div className="rating-star sm">
                          <i className="fas fa-star" />
                        </div>
                      </div>
											2.35
										</div>
                    <div className="rating-stars d-flex">
                      <div className="rating-stars-container mr-2">
                        <div className="rating-star sm">
                          <i className="fas fa-phone" />
                        </div>
                      </div>
                      <a href={`tel:${negocioActual.telefonoNegocio}`}>
                        {negocioActual.telefonoNegocio}
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="text-center">
                      <img src={imagenActual} style={{ height: '40vh' }} />
                    </div>
                  </div>
                  <div className="clearfix">
                    <br />
                    <br />
                    <SliderDetalles
                      images={imagenes}
                      click={previewImage} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Descripción</h3>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  {negocioActual.descripcionNegocio}
                </div>

              </div>
              <div className="card-footer">
                <div className="icons">
                  <a href="#" className="btn btn-info icons">
                    <i className="icon icon-share mr-1" /> Share Ad
									</a>
                  &nbsp; 
                  <a href="#" className="btn btn-primary icons">
                    <i className="icon icon-heart  mr-1" /> 678
									</a>
                  &nbsp;
                  <a href="#" className="btn btn-secondary icons">
                    <i className="icon icon-printer  mr-1" /> Print
									</a>
                </div>
              </div>
            </div>
            <h3 className="mb-5 mt-4">Reseñas</h3>

            <TablaReviews id={id} />
            {userActual ? <NuevaResena key={id} id={id} /> : null}
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
                    <option value="1">
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
                      <tbody>
                        <tr>
                          <td>
                            <img src="img/products/1.png" alt="image" className="w-8 border" />
                          </td>
                          <td>
                            <h5 className="mb-1 ">Best New Model Watch</h5>
                            <a href="#" className="btn-link">
                              View Details
													</a>
                            <span className="float-right font-weight-bold">$17</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li className="news-item">
                    <table>
                      <tr>
                        <td>
                          <img src="img/products/2.png" alt="image" className="w-8 border" />
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
                          <img src="img/products/3.png" alt="image" className="w-8 border" />
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
                          <img src="img/products/4.png" alt="image" className="w-8 border" />
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
                          <img src="img/products/5.png" alt="image" className="w-8 border" />
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
                          <img src="img/products/6.png" alt="image" className="w-8 border" />
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
                          <img src="img/products/7.png" alt="image" className="w-8 border" />
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
