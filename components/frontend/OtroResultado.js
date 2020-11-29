import React from 'react';

const OtroResultado = ({ negocio }) => {

    const {nombre, categoria} = negocio;

    return (
        <div className="card overflow-hidden">
            <div className="d-md-flex">
                <div className="item-card9-img">
                    <div className="item-card9-imgs">
                        <a href="classified.html"></a>
                        <img src="../img/products/h4.png" alt="img" className="cover-image"/>
                    </div>
                    <div className="item-card9-icons">
                        <a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
                    </div>
                </div>
                <div className="card border-0 mb-0">
                    <div className="card-body ">
                        <div className="item-card9">
                            <a href="classified.html">{categoria}</a>
                            <a href="classified.html" className="text-dark"><h4 className="font-weight-semibold mt-1">{nombre}</h4></a>
                            <p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                        </div>
                    </div>
                    <div className="card-footer pt-4 pb-4">
                        <div className="item-card9-footer d-flex">
                            <div className="item-card9-cost">
                                <h4 className="text-dark font-weight-semibold mb-0 mt-0">$263.99</h4>
                            </div>
                            <div className="ml-auto">
                                <div className="rating-stars block">
                                    <input type="number" readOnly className="rating-value star" name="rating-stars-value"  value="3"/>
                                    <div className="rating-stars-container">
                                        <div className="rating-star sm">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm">
                                            <i className="fa fa-star"></i>
                                        </div>
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

export default OtroResultado;
