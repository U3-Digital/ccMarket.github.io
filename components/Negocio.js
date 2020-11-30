import React from 'react';
const Negocio = ({ negocio }) => {
    const {id} = negocio;
    const { nombre } = negocio.data();
/*                 <div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
 */
    
    
    return (
        <div className="item">
            <div className="card mb-0">
                <div className="item-card2-img">
                    <a href="classified.html"></a>
                    <img src="../img/products/products/f1.jpg" alt="img" className="cover-image" />
                </div>
                <div className="item-card2-icons">
                    <a href="classified.html" className="item-card2-icons-l bg-primary"> <i className="fa fa-cutlery"></i></a>
                    <a href="#" className="item-card2-icons-r bg-secondary"><i className="fa fa fa-heart-o"></i></a>
                </div>
                <div className="card-body pb-0">
                    <div className="item-card2">
                        <div className="item-card2-desc">
                            <div className="item-card2-text">
                                <a href="classified.html" className="text-dark"><h4 className="mb-0">{nombre}</h4></a>
                            </div>
                            <div className="d-flex">
                                <a href="">
                                    <p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>Florida, USA</p>
                                </a>
                                <span className="ml-3 pb-0 pt-0 mb-2 mt-2">$200.00</span>
                            </div>
                            <p className="">Ut enim ad minima veniam, quis int nostrum exercitationem </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="item-card2-footer">
                        <div className="item-card2-footer-u">
                            <div className="row d-flex">
                                <span className="review_score mr-2 badge badge-primary">4.0/5</span>
                                <div className="rating-stars d-inline-flex">
                                    <input type="number" readOnly = {true} className="rating-value star" name="rating-stars-value" value="3" />
                                    <div className="rating-stars-container">
                                        <div className="rating-star sm is--active">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm is--active">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm is--active">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm">
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="rating-star sm">
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div> (5 Reviews)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Negocio;