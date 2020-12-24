import React, {useState} from 'react'
import StarRatings from 'react-star-ratings'; 
const Review = ({comentario}) => {
    const {comentario: comentarioUsuario, estrellas, nombre,photo} = comentario.data();
    return(
        <div className="media p-5 border-top mt-0">
            <div className="d-flex mr-3">
                <a>
                    <img
                        className="media-object brround"
                        alt="64x64"
                        src={photo ? (photo) : ("../../../img/user.png")}
                    />
                </a>
            </div>
            <div className="media-body">
                <h5 className="mt-0 mb-1 font-weight-semibold">
                    {nombre}
                    <span
                        className="fs-14 ml-0"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="verified"
                    >
                        <i className="fa fa-check-circle-o text-success" />
                    </span>
                    <span className="fs-14 ml-2">
                        <StarRatings
                            rating={estrellas}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            starSpacing ={2}
                            name='rating'
                            starDimension="15px"
                        />
                    </span>
                </h5>
                
                <p className="font-13  mb-2 mt-2">
                    {comentarioUsuario}
                </p>
                
            </div>
        </div>
    );
}
export default Review;