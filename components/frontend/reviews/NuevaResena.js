import React, {useState} from 'react'
import StarRatings from 'react-star-ratings';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from '../../firebase';
import Swal from 'sweetalert2';
import {gql, useMutation} from '@apollo/client';

const NUEVO_COMENTARIO = gql`
    mutation nuevoComentario($input: ComentarioInput!){
        nuevoComentario(input: $input){
            id
            comentario
            email
            estrellas
            negocioId
            nombre
            foto
        }
    }
`;

const OBTENER_COMENTARIOS = gql`
    query obtenerComentariosNegocio($id: ID!){
        obtenerComentariosNegocio(id: $id){
            id
            comentario
            email
            estrellas
            negocioId
            nombre
            foto
        }
    }
`;

const NuevaResena = ({id}) => {
    const [star, setStar] = useState(1)
    const [mensaje, setmensaje] = useState(null);
    const [usuario, setUsuario] = useState({displayName: '', email: ''})
    const [nombre, setnombre] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [nuevoComentario] = useMutation(NUEVO_COMENTARIO, {
        update(cache, { data: { nuevoComentario } }) {
          const { obtenerComentariosNegocio } = cache.readQuery({ query: OBTENER_COMENTARIOS, variables: {id}});
          cache.writeQuery({
            query: OBTENER_COMENTARIOS,
            variables: {id},
            data: {
              obtenerComentariosNegocio: [...obtenerComentariosNegocio, nuevoComentario]
            }
          })
        }
      })
    const db = firebase.firestore().collection('comentarios');

	const database = firebase.firestore().collection('usuarios')
    firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			if (user.providerData[0].providerId == "google.com") {
				const { displayName,photoURL } = user;
                setnombre(displayName);
                setImage(photoURL);
			} else {
				const { uid } = user;
				database.doc(uid).get().then((snapshot) => {
					setnombre(snapshot.data().nombre);
				});
			}
			setEmail(user.email);
		} 
	});

    const formikResena = useFormik({
        initialValues: {
            comentarioUsuario: '' 
        },
        validationSchema: Yup.object({
            comentarioUsuario: Yup.string().required('El comentario es necesario')
        }),
        onSubmit: async valores => {
            const {comentarioUsuario} = valores;
            try {
                const respuesta = await nuevoComentario({
                    variables:{
                        input: {
                            comentario: comentarioUsuario,
                            email,
                            estrellas: star,
                            negocioId: id,
                            nombre,
                            foto: image
                        }
                    }
                });
                setStar(1);
                formikResena.resetForm();

            } catch (error) {
                console.log(error);
            }
            /*const {comentarioUsuario} = valores
            const res = await db.add({
                negocio: id.id,
                nombre: nombre,
                correo: email,
                comentario: comentarioUsuario,
                estrellas: star,
                photo: image
            });
            setStar(1)
            formikResena.resetForm();*/
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