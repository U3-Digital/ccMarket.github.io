import React from 'react'

const Categoria = ({categoria}) =>{
    const {id} = categoria;
    const {nombre} = categoria.data();

    return(
        <div className="item">
            <div className="card mb-0">
                <div className="card-body">
                    <div className="cat-item text-center">
                        <a href="classifieds-list.html"></a>
                        <div className="cat-img">
                            <img src="../img/products/categories/loan.png" alt="img"/>
                        </div>
                        <div className="cat-desc">
                            <h5 className="mb-1">{nombre}</h5>
                            <small className="badge badge-pill badge-primary mr-2">45</small><span className="text-muted">ads are posted</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categoria;