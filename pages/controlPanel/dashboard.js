import React, { useState } from 'react'
import Layout from '../../components/backend/Layout';
import NuevoNegocio from '../../components/backend/NuevoNegocio';
// import NuevoAdmin from '../../components/backend/NuevoAdmin';
import firebase from '../../components/firebase';

const dashboard = () => {
    const [loading, setloading] = useState(false);
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
                <NuevoNegocio/>
            </div>
        </Layout>
    );
}
export default dashboard;