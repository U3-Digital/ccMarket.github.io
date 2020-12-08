import React, { useContext, useState } from 'react'
import Layout from '../../components/backend/Layout';
import NuevoNegocio from '../../components/backend/NuevoNegocio';
import NuevoAdmin from '../../components/backend/NuevoAdmin'
import ListaAdmins from '../../components/backend/ListaAdmins'; 
import firebase from '../../components/firebase';
import BackEndContext from '../../context/backend/BackEndContext'
import EditAdmin from '../../components/backend/EditarAdmin';
import Dashboard from '../../components/backend/Dashboard';
const dashboard = () => {
    const [loading, setloading] = useState(false);
    const backendContext = useContext(BackEndContext);
    const {nombre} = backendContext;


    const database = firebase.firestore().collection('usuarios');

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            if (user.providerData[0].providerId !== "google.com") {
                const { uid } = user;
                database.doc(uid).get().then((snapshot) => {
                    if (!snapshot.data().admin) {
                        window.location.href = "/controlPanel"
                    } else {
                        setloading(true);
                    }
                })
            } else {
                window.location.href = "/controlPanel"
            }
        } else {
            window.location.href = "/controlPanel"
        }
    });


    if (!loading) {
        return (null);
    }

    return (
        <Layout>
            <div className="page-body">
                {nombre === "Dashboard" ? (<Dashboard/>) : null}
                {nombre === "NuevoAdmin" ? (<NuevoAdmin/>) : null}
                {nombre === "NuevoNegocio" ? (<NuevoNegocio/>) : null}
                {nombre === "ListaAdmins" ? (<ListaAdmins/>) : null}
                {nombre === "EditAdmin" ? (<EditAdmin/>) : null}
            </div>
        </Layout>
    );
}
export default dashboard;