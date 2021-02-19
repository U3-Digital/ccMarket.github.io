import React,{useState} from 'react';
import firebase from '../../components/firebase';

const OtroResultado = ({ negocio }) => {
    const {nombre, categorias,direccion,telefonoNegocio,id} = negocio;
    const [image, setImage] = useState('../img/products/products/f1.jpg');
    const [loadPhoto, setLoadPhoto] = useState(false);
    const storage = firebase.storage();

    if (!loadPhoto) {
        try {
            const storageRef = storage.ref(`negocios/${id}/1`);
            storageRef.getDownloadURL().then((url) =>{
              setImage(url);
            }).catch((error) => {
              console.log(error.code);
            });
        } catch (error) {
            
        }
        
        setLoadPhoto(true); 
    }

    return (
        <div className="col-lg-4 col-md-12">
            <div className="card card-aside">
                <div className="card-body ">
                    <div className="card-item d-flex">
                        <img src={image} alt="img" className="w-8 h-8"/>
                        <div className="ml-4">
                            <h6 className="font-weight-bold mt-2">{nombre}</h6>
                            <a >{direccion}</a>
                        </div>
                    </div>
                    
                    {telefonoNegocio ? (<><br/><a href={`tel:${telefonoNegocio}`}><i className="fa fa-phone mr-2 "></i>{telefonoNegocio}</a></>) : (null)}
                </div>
            </div>
        </div>
    );
};

export default OtroResultado;
