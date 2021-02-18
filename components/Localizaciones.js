import React, {useState} from 'react';
import {useMutation, useQuery, gql} from '@apollo/client';

const OBTENER_LOCALIZACIONES = gql`
	query obtenerEstadisticasCiudades{
		obtenerEstadisticasCiudades{
			count
			_id
		}
	}
`;
const Localizaciones = () => {

	const {data,loading,error} = useQuery(OBTENER_LOCALIZACIONES);
	const [cuauhtemoc, setCuauhtemoc] = useState(null);
	const [anahuac, setanahuac] = useState(0);
	const [guerrero, setGuerrero] = useState(0);
	const [laJunta, setLaJunta] = useState(0);
	const [creel, setCreel] = useState(0);
	if(loading) return 'Cargando...';

	const {obtenerEstadisticasCiudades} = data;


	if(!cuauhtemoc){
		let cuentaCuauhtemoc = 0;
		let cuentaGuerrero = 0;
		let cuentaAnahuac = 0;
		let cuentaLaJunta = 0;
		let cuentaCreel = 0;
		obtenerEstadisticasCiudades.map(ciudad => {
			if(ciudad._id === 'CUAUHTéMOC' || ciudad._id === 'Cuauhtémoc'){
				cuentaCuauhtemoc += ciudad.count;
			}
			if(ciudad._id === 'ANAHUAC' || ciudad._id === 'Anáhuac'){
				cuentaAnahuac += ciudad.count;
			}
			if(ciudad._id === 'CD. GUERRERO' || ciudad._id == 'Cd. Guerrero'){
				cuentaGuerrero += ciudad.count;
			}
			if(ciudad._id === 'LA JUNTA' || ciudad._id == 'La Junta'){
				cuentaLaJunta += ciudad.count;
			}
			if(ciudad._id === 'CREEL' || ciudad._id == 'Creel'){
				cuentaCreel += ciudad.count;
			}
		});
		setCuauhtemoc(cuentaCuauhtemoc);
		setanahuac(cuentaAnahuac);
		setGuerrero(cuentaGuerrero);
		setLaJunta(cuentaLaJunta);
		setCreel(cuentaCreel);
	}


    return (
        <section className="sptb bg-white">
			<div className="container">
				<div className="section-title center-block text-center">
					<h2>Nuestra cobertura</h2>
				</div>
                <div className="row">
					<div className="col-12 col-md-12 col-lg-12 col-xl-6">
						<div className="row">
							<div className="col-sm-12 col-lg-6 col-md-6 ">
								<div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/creelChihuahua.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">{creel} Negocios<span><i className="fa fa-map-marker mr-1 text-primary"></i>Creel</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6 ">
								<div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/laJuntaChihuahua.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">{laJunta} Negocios<span><i className="fa fa-map-marker mr-1 text-primary"></i> La Junta</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6 ">
							    <div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/anahuacChihuahua.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">{anahuac} Negocios<span><i className="fa fa-map-marker text-primary mr-1"></i>Anajuac</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6 ">
								<div className="item-card overflow-hidden">
									<div className="item-card-desc">
										<div className="card text-center overflow-hidden">
											<div className="card-img">
												<img src="../img/locations/guerreroChihuahua.jpg" alt="img" className="cover-image"/>
											</div>
											<div className="item-card-text">
												<h4 className="mb-0">{guerrero} Negocios<span><i className="fa fa-map-marker text-primary mr-1"></i>Guerrero</span></h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-xl-6 col-sm-12">
						<div className="item-card overflow-hidden">
							<div className="item-card-desc">
								<div className="card overflow-hidden">
									<div className="card-img">
										<img src="../img/locations/monumentoacuauhtemoc.jpg"  alt="img" className="cover-image"/>
									</div>
									<div className="item-card-text">
										<h4 className="mb-0">{cuauhtemoc} Negocios<span><i className="fa fa-map-marker text-primary mr-1"></i>Cuauhtémoc</span></h4>
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

export default Localizaciones;
