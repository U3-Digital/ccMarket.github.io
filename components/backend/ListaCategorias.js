import React, {useState} from 'react'
import firebase from '../firebase';
import RowCategoria from './RowCategoria';  
const ListaCategorias = () => {
    const [consulta, setConsulta] = useState(false);
    const [loading, setLoading] = useState(true);
    const [categorias, setCategorias] = useState([]);

    const tempCategorias = [];

    const usuariosFirestore = firebase.firestore().collection('categorias');
    if (loading) {
        usuariosFirestore.get().then((snapshot) => {
            if (snapshot.empty) {
                console.log('No se encontraron Categorias');
                return;
            }
            snapshot.forEach((categoria) => {
                tempCategorias.push(categoria);
            });
            setCategorias(tempCategorias);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Lista de categorías</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="dashboard"><i className="fas fa-home"></i></a>
                                </li>
                                <li className="breadcrumb-item">Lista de categorías</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="best-seller-table responsive-tbl">
                                    <div className="item">
                                        <div className="table-responsive product-list">
                                            <table className="table table-bordernone">
                                                <thead>
                                                    <tr>
                                                        <th className="f-22">Categoría</th>
                                                        <th className="text-right">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        categorias.map((categoria) => (
                                                            <RowCategoria
                                                                key={categoria.id}
                                                                categoria={categoria} />
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;