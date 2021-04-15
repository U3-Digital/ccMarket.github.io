import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../../components/backend/Layout';
import { useMutation, gql } from '@apollo/client';

const AUTENTICAR_USUARIO = gql`
mutation autenticarUsuario($input: AuthInput!) {
  autenticarUsuario(input: $input) {
    token
  }
}
`;

const index = () => {

  const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);

  // const database = firebase.firestore().collection('usuarios');

  const [mensaje, setMensaje] = useState(null);
  /* firebase.auth().onAuthStateChanged(function (user) {
      if(user){
          if(user.providerData[0].providerId !== "google.com"){
              const { uid } = user;
              database.doc(uid).get().then((snapshot) => {
                  if (snapshot.data().admin) {
                      window.location.href = "/controlPanel/dashboard"
                  }
              })
          }
          console.log(user);
      }
  })
*/
  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('El correo no es válido').required('El correo es necesario'),
      password: Yup.string().required('La contraseña es necesaria')
    }),
    onSubmit: async valores => {
      const { email, password } = valores;
      try {
        const { data } = await autenticarUsuario({
          variables: {
            input: {
              email,
              password
            }
          }
        });
        localStorage.setItem('token', data.autenticarUsuario.token);
        window.location.href = '/controlPanel/dashboard';
        console.log(data.autenticarUsuario.token);
      } catch (error) {
        setMensaje(error.message);
        setTimeout(() => {
          setMensaje(null);
        }, 5000);
        // setMensaje(erro)/
      }

      //  console.log();
      // localStorage.setItem('token', resultado.data.autenticarUsuario.token);

      /* await firebase.auth().signInWithEmailAndPassword(email, password).then((param) => {
          const uid = param.user.uid;
          database.doc(uid).get().then((snapshot) => {
              if (snapshot.empty) {
                  mostrarMensaje('Hubo un pedote');
              } else {
                  if (snapshot.data().admin) {
                      window.location.href = '/controlPanel/dashboard';
                  } else {
                      firebase.auth().signOut().then(function () {
                          mostrarMensaje('No eres admin puto');
                      }).catch(function (error) {
                          console.log(error);
                      });
                  }
              }
          }).catch((error) => {
              console.log(error);
          });
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);

          setMensaje(errorMessage);
          setTimeout(() => {
              setMensaje(null);
          }, 5000);
      }); */
    }
  });

  const mostrarMensaje = () => {
    return (
      <div className="alert alert-secondary mt-3 p-2 text-center" role="alert">
        {mensaje}
      </div>
    );
  }

  return (
    <Layout>
      <div className="container-fluid" style={{ height: '100vh', backgroundColor: '#EFEFEF' }}>
        <div className="row h-100 justify-content-center ">
          <div className="col-lg-4 col-md-6 col-12 my-auto">
            <div className="card">
              <div className="card-body">
                <form id="login" className="theme-form" onSubmit={formikLogin.handleSubmit}>
                  <div className="text-center">
                    <h4>Iniciar sesión</h4>
                    <h6>Ingrese su correo y su contraseña</h6>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Correo</label>
                    <input className="form-control" type="email" id="email" name="email" onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} value={formikLogin.values.email} />
                    {
                      formikLogin.touched.email && formikLogin.errors.email ? (
                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                          {formikLogin.errors.email}
                        </div>
                      ) : null
                    }
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Contraseña</label>
                    <input className="form-control" type="password" id="password" name="password" onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} value={formikLogin.values.password} />
                    {
                      formikLogin.touched.password && formikLogin.errors.password ? (
                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                          {formikLogin.errors.password}
                        </div>
                      ) : null
                    }
                  </div>
                  {mensaje && mostrarMensaje()}
                  <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label htmlFor="checkbox1">Recordarme</label>
                  </div>
                  <div className="form-group row mt-3 mb-0">
                    <button className="btn btn-primary btn-block" type="submit">INICIAR SESIÓN</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;

/* <div className="page-wrapper h-100">
                <div className="container-fluid p-0">
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-8 col-12">
                                <div className="authentication-box">
                                    <div className="card-body">
                                        <div className="cont text-center">
                                            <form className="theme-form">
                                                <h4>Iniciar sesión</h4>
                                                <h6>Ingrese su correo y su contraseña</h6>
                                                <div className="form-group">
                                                    <label className="col-form-label pt-0">Correo</label>
                                                    <input className="form-control" type="email" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">Contraseña</label>
                                                    <input className="form-control" type="password" required />
                                                </div>
                                                <div className="checkbox p-0">
                                                    <input id="checkbox1" type="checkbox"/>
                                                    <label htmlFor="checkbox1">Recordarme</label>
                                                </div>
                                                <div className="form-group row mt-3 mb-0">
                                                    <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */