import React, { useState } from 'react';
import firebase from './firebase';

const Categoria = ({ categoria }) => {
    const [loadphoto,setloadphoto] = useState(false);
    const [urlImage,seturlImage] = useState("../img/svgs/jobs/cooking.svg");
    const storage = firebase.storage();
    const { id } = categoria;
    const { nombre } = categoria.data();


    if(!loadphoto){
        const storageRef = storage.ref(`categorias/${id}.png`);
        storageRef.getDownloadURL().then(function(url) {
            seturlImage(url);
        }).catch(function(error) {
        console.log(error.code);
        switch (error.code) {
            case 'storage/object-not-found':
            // File doesn't exist
            break;

            case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

            case 'storage/canceled':
            // User canceled the upload
            break;


            case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
        });
        setloadphoto(true);
    }

    return (
        <div className="item" style={{ width: '300px' }}>
            <div className="card mb-0">
                <div className="card-body">
                    <div className="cat-item text-center">
                        <a href="classifieds-list.html"></a>
                        <div className="cat-img">
                            <img src={urlImage} alt="img" />
                        </div>
                        <div className="cat-desc">
                            <h5 className="mb-1">{nombre}</h5>
                            <small className="badge badge-pill badge-primary mr-2">
                                {Math.floor(Math.random() * 100)}
                            </small>
                            <span className="text-muted">Negocios disponibles</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categoria;