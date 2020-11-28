import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from '../firebase';
const Login = () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
	firebase.auth().languageCode = 'es';


	const database = firebase.firestore().collection('usuarios');
	const [mensaje, setmensaje] = useState(null);


	const formikRegister = useFormik({
		initialValues: {
			name: '',
			mail: '',
			passwordR: ''
		},
		validationSchema: Yup.object({
			name: Yup.string().required('El nombre es necesario'),
			mail: Yup.string().email('El correo no es válido').required('El correo es necesario para el registro'),
			passwordR: Yup.string().required('La contraseña es necesaria').min(6, "El número mínimo de caracteres es 6")
		}),
		onSubmit: valores => {
			const { name, mail, passwordR } = valores;


			firebase.auth().createUserWithEmailAndPassword(mail, passwordR).then(async (result) => {
				
				const { uid } = result.user
				await database.doc(uid).set({
					nombre: name
				}).then(() => {
					setmensaje("Usuario creado");
					setTimeout(() => {
						setmensaje(null);
					}, 5000);
				});
				window.location.href = '/';
			}).catch(function(error) {
				// Handle Errors here.

				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
				setmensaje(errorMessage);
				setTimeout(() => {
					setmensaje(null);
				}, 5000);
			});
		}
	});

	const formik = useFormik({
		initialValues:{
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('El correo no es válido').required('El correo es necesario'),
			password: Yup.string().required('La contraseña es necesaria')
		}),
		onSubmit: async valores => {
			const {email, password} = valores;
			await firebase.auth().signInWithEmailAndPassword(email, password).then((param) => {
				window.location.href = '/';
			}).catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode, errorMessage);
				
				setmensaje(errorMessage);
				setTimeout(() => {
					setmensaje(null);
				}, 5000);
				// ...
			});
		}
	});

	const loginwithGooogle = () =>{
		firebase.auth().signInWithPopup(provider).then(function(result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			
			window.location.href = '/';
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});
	}

	const mostrarMensaje = () =>{
		return(
			<div className="alert alert-warning" role="alert">
				{mensaje}
			</div>
		);
	};

    return (
        <section className="sptb">
			<div className="container customerpage">
                <div className="row">
					<div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
						<div className="row">
							<div className="col-xl-12 col-md-12 col-md-12 register-right">
								<ul className="nav nav-tabs nav-justified mb-5 p-2 border" id="myTab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active m-1" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Iniciar sesión</a>
									</li>
									<li className="nav-item">
										<a className="nav-link m-1" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Registrarse</a>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent">
									<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
										<div className="single-page w-100 p-0">
											<div className="wrapper wrapper2">
												<form id="login" className="card-body" tabIndex="500" onSubmit = {formik.handleSubmit}>
													<h3 className="pb-2">Iniciar sesión</h3>
													<div className="mail">
														<input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.email}/>
														<label>Correo electrónico</label>
														{formik.touched.email && formik.errors.email ? (
															<div className="alert alert-warning" role="alert">
																{formik.errors.email}
															</div>
														):null}
													</div>
													<div className="passwd">
														<input type="password" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
														<label>Contraseña</label>
														{formik.touched.password && formik.errors.password ? (
															<div className="alert alert-warning" role="alert">
																{formik.errors.password}
															</div>
														) : null}
													</div>
													{mensaje && mostrarMensaje()}
                                                    <button type="submit" className="submit btn btn-primary btn-block">Iniciar sesión</button>
													<br/>
													<p className="text-dark mb-0"><a href="forgot.html">Recuperar contraseña</a></p>
													<p className="text-dark mb-0">¿No tiene una cuenta?<a href="register.html" className="text-primary ml-1">Regístrese</a></p>
												</form>
												<hr className="divider"/>
												<div className="pt-3 pb-3">
													<div className="text-center">
														<div className="btn-group mt-2 mb-2">
															<button className="btn brround" onClick={() => loginwithGooogle()}>
																<span className="fa fa-google" style={{fontSize: '1.5em'}}></span>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
										<div className="single-page w-100  p-0">
											<div className="wrapper wrapper2">
												<form id="Register" className="card-body" tabIndex="500" onSubmit={formikRegister.handleSubmit}>
													<h3 className="pb-1">Registro</h3>
													<div className="name">
														<input type="text" id="name" name="name" onChange={formikRegister.handleChange} onBlur={formikRegister.handleBlur} value={formikRegister.values.name}/>
														<label>Nombre</label>
														{formikRegister.touched.name && formikRegister.errors.name ? (
															<div className="alert alert-warning" role="alert">
																{formikRegister.errors.name}
															</div>
														) : null}
													</div>
													<div className="mail">
														<input type="email" id="mail" name="mail" onChange={formikRegister.handleChange} onBlur={formikRegister.handleBlur} value={formikRegister.values.mail}/>
														<label>Correo electrónico</label>
														{formikRegister.touched.mail && formikRegister.errors.mail ? (
															<div className="alert alert-warning" role="alert">
																{formikRegister.errors.mail}
															</div>
														) : null}
													</div>
													<div className="passwd">
														<input type="password" id="passwordR" name="passwordR" onChange={formikRegister.handleChange} onBlur={formikRegister.handleBlur} value={formikRegister.values.passwordR}/>
														<label>Contraseña</label>
														{formikRegister.touched.passwordR && formikRegister.errors.passwordR ? (
															<div className="alert alert-warning" role="alert">
																{formikRegister.errors.passwordR}
															</div>
														) : null}
													</div>
													{mensaje && mostrarMensaje()}
													<button type="submit" className="submit btn btn-primary btn-block">Registrarme</button>
													<p className="text-dark mb-0">¿Ya tiene una cuenta?<a href="login.html" className="text-primary ml-1">Inicie sesión</a></p>
												</form>
												<hr className="divider"/>
												<div className="pt-3 pb-3">
                                                    <div className="text-center">
														<div className="btn-group mt-2 mb-2">
															<a onClick={()=>loginwithGooogle()} className="btn btn-icon brround">
																<span className="fa fa-google"></span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Login;
