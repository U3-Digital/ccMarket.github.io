import React, {useState} from 'react'
import StarRatings from 'react-star-ratings';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from '../../firebase';
const NuevaResena = (id) => {
    const [star, setStar] = useState(1)
    const [mensaje, setmensaje] = useState(null);
    const [usuario, setUsuario] = useState({displayName: '', email: ''})
    const db = firebase.firestore().collection('comentarios');
    firebase.auth().onAuthStateChanged(function (user) {
		if(user){
			setUsuario(user)
		}
	})

    const formikResena = useFormik({
        initialValues: {
            nameUsuario: usuario.displayName,
            correoUsuario: usuario.email,
            comentarioUsuario: '' 
        },
        validationSchema: Yup.object({
            nameUsuario: Yup.string().required('El nombre es necesario'),
            correoUsuario: Yup.string().email('Se necesita un correo valido').required('El correo es necesario'),
            comentarioUsuario: Yup.string().required('El comentario es necesario')
        }),
        onSubmit: async valores => {
            const {nameUsuario,correoUsuario,comentarioUsuario} = valores
            const res = await db.add({
                negocio: id,
                nombre: nameUsuario,
                correo: correoUsuario,
                comentario: comentarioUsuario,
                estrellas: star
            });
            console.log('Added document with ID: ', res.id);
        }
    })

    firebase.auth().onAuthStateChanged(function (user) {
		if(user){
            formikResena.values.nameUsuario = user.displayName;
            formikResena.values.correoUsuario = user.email;
		}
	})

    const mostrarMensaje = () =>{
		return(
			<div className="alert alert-warning" role="alert">
				{mensaje}
			</div>
		);
    };
    
    return(
        <div className="card mb-lg-0">
            <div className="card-header">
                <h3 className="card-title">Deja tu reseña</h3>
            </div>
            <div className="card-body">
                <form onSubmit = {formikResena.handleSubmit}>
                    <div>
                        <div className="form-group">
                            <StarRatings
                                rating={star}
                                starRatedColor="#7366FF"
                                starHoverColor = "#EC296B"
                                starDimension="30px"
                                changeRating={( newRating, name ) => setStar(newRating)}
                                numberOfStars={5}
                                name='rating'
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="nameUsuario"
                                name="nameUsuario"
                                placeholder="Nombre"
                                onChange={formikResena.handleChange}
                                onBlur={formikResena.handleBlur}
                                value={formikResena.values.nameUsuario}
                            />
                            {formikResena.touched.nameUsuario && formikResena.errors.nameUsuario ? (
                                <div className="alert alert-warning" role="alert">
                                    {formikResena.errors.nameUsuario}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="correoUsuario"
                                name="correoUsuario"
                                placeholder="Correo electrónico"
                                disabled
                                onChange={formikResena.handleChange}
                                onBlur={formikResena.handleBlur}
                                value={formikResena.values.correoUsuario}
                            />
                            {formikResena.touched.correoUsuario && formikResena.errors.correoUsuario ? (
                                <div className="alert alert-warning" role="alert">
                                    {formikResena.errors.correoUsuario}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                name="comentarioUsuario"
                                id="comentarioUsuario"
                                rows="6"
                                placeholder="Comentario"
                                onChange={formikResena.handleChange}
                                onBlur={formikResena.handleBlur}
                                value={formikResena.values.comentarioUsuario}
                            />
                            {formikResena.touched.comentarioUsuario && formikResena.errors.comentarioUsuario ? (
                                <div className="alert alert-warning" role="alert">
                                    {formikResena.errors.comentarioUsuario}
                                </div>
                            ) : null}
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar reseña</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NuevaResena;