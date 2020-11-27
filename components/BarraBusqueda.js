import React from 'react';
import TablaSelectCategorias from '../components/frontend/TablaSelectCategorias';

const BarraBusqueda = () => {
    return(
    <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2" data-image-src="../img/banners/banner1.jpg">
        <div className="header-text mb-0">
            <div className="container">
                <div className="text-center text-white mb-7">
                    <h1 className="mb-1">Encuentra tu mejor opción</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable.</p>
                </div>
                <div className="row">
                    <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                        <div className="search-background bg-transparent">
                            <div className="form row no-gutters ">
                                <div className="form-group col-xl-4 col-lg-3 col-md-12 mb-0 bg-white">
                                    <input type="text" className="form-control input-lg br-tr-md-0 br-br-md-0" id="text4" placeholder="Busque algo"/>
                                </div>
                                <div className="form-group col-xl-3 col-lg-3 col-md-12 mb-0 bg-white">
                                    <input type="text" className="form-control input-lg br-md-0" id="text5" placeholder="Localización"/>
                                    <span><i className="fa fa-map-marker location-gps mr-1"></i></span>
                                </div>
                                <div className="form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-white">
                                    <select className="form-control select2-show-search  border-bottom-0" data-placeholder="Select Category">
                                        <TablaSelectCategorias/>
                                    </select>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                                    <a href="#" className="btn btn-lg btn-block btn-primary br-tl-md-0 br-bl-md-0">Buscar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BarraBusqueda;