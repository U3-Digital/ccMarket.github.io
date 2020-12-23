import React,{useState} from 'react';
import firebase from '../../components/firebase';

const OtroResultado = ({ negocio }) => {
    const {nombre, categoria,id} = negocio;
    const [image, setImage] = useState('../img/products/products/f1.jpg');
    const [loadPhoto, setLoadPhoto] = useState(false);
    const storage = firebase.storage();

    if (!loadPhoto) {
        const storageRef = storage.ref(`negocios/${id}/1.png`);
        storageRef.getDownloadURL().then((url) =>{
          setImage(url);
        }).catch((error) => {
          console.log(error.code);
        });
        setLoadPhoto(true);
    }

    return (
        <div class="col-lg-4 col-md-12">
            <div class="card card-aside">
                <div class="card-body ">
                    <div class="card-item d-flex">
                        <img src={image} alt="img" class="w-8 h-8"/>
                        <div class="ml-4">
                            <h6 class="font-weight-bold mt-2">{nombre}</h6>
                            <a >{categoria}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtroResultado;
