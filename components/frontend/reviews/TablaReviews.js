import React,{useState} from 'react'
import firebase from '../../firebase';
import Review from './review';
import {useQuery,gql} from '@apollo/client';

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

const TablaReviews = ({id}) => {
    //const [loading, setLoading] = useState(true)
    const  db = firebase.firestore().collection('comentarios');
    const {data,loading,error} = useQuery(OBTENER_COMENTARIOS,{
        variables: {
            id
        }
    });
    const [comentarios, setcomentarios] = useState([]);
    
    if(loading){
        return 'Cargando...';
    }
    if(!data){
        return 'nada';
    }
    console.log(error);
    const {obtenerComentariosNegocio} = data;

    
   /* if (loading){
        const tempComentarios = [];
        setLoading(false)
        db.where('negocio', '==', id.id).limit(5).get()
        .then(snapshot => {
          if (snapshot.empty) {
            setcomentarios(null)
            return;
          }
      
          snapshot.forEach(doc => {
            tempComentarios.push(doc);
          });

          setcomentarios(tempComentarios);
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
    }
*/
    if(obtenerComentariosNegocio.length === 0){
        return(
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">No hay reseñas registradas para este negocio</h3>
                </div> 
            </div> 
        )
    }

    return(
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Reseñas</h3>
            </div>

            <div className="card-body p-0">
                {obtenerComentariosNegocio.map((comentario => (
                    <Review key={comentario.id} comentario={comentario}/>
                )))}
            </div>
        </div>
    );
}

export default TablaReviews;