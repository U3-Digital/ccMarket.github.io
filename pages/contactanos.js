import React from 'react';
import Layout from '../components/Layout';

const contactanos = () => {
	return (
		<Layout>
			<>
				<br />
				<br />
				<br />
				<div class="sptb mb-0 pb-0">
					<div class="container">
						<div class="row">
							<div class="col-lg-5 col-xl-4  col-md-12  d-block mb-7">
								<div class="section-title center-block text-center">
									<h2>Información de contacto</h2>
								</div>
								<div class="row text-white">
									<div class="col-12 mb-5">
										<div class="support-service bg-primary br-2 mb-4 mb-xl-0">
											<i class="fa fa-phone" />
											<h6>625-123-1234</h6>
											<p>¡Llámanos</p>
										</div>
									</div>
									<div class="col-12 mb-5">
										<div class="support-service bg-secondary br-2 mb-4 mb-xl-0">
											<i class="fa fa-clock-o" />
											<h6>Lunes a viernes (10am - 7pm)</h6>
											<p>Horario</p>
										</div>
									</div>
									<div class="col-12">
										<div class="support-service bg-warning br-2">
											<i class="fa fa-envelope-o" />
											<h6>correo@u3digital.com.mx</h6>
											<p>Nuestro correo</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-7 col-xl-8 col-md-12 d-block ">
								<div class="single-page">
									<div class="col-lg-12  col-md-12 mx-auto d-block">
										<div class="section-title center-block text-center">
											<h2>Forma de contacto</h2>
										</div>
										<div class="wrapper wrapper2">
											<div class="card mb-0">
												<div class="card-body">
													<div class="form-group">
														<input
															type="text"
															class="form-control"
															id="name1"
															placeholder="Su nombre"
														/>
													</div>
													<div class="form-group">
														<input
															type="email"
															class="form-control"
															id="email"
															placeholder="Correo electrónico"
														/>
													</div>
													<div class="form-group">
														<textarea
															class="form-control"
															name="example-textarea-input"
															rows="6"
															placeholder="Mensaje"
														/>
													</div>
													<a href="#" class="btn btn-primary">
														Enviar mensaje
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
				<br />
				<br />
			</>
		</Layout>
	);
};

export default contactanos;
