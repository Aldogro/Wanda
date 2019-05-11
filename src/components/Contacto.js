import React from 'react';
      import face from '../images/facebook.svg';
      import insta from '../images/instagram.svg';
      import mail from '../images/envelope.svg';
      import whapp from '../images/whatsapp.svg';
import Mapas from './Mapas';

const Contacto = () => {
  return(

    <div>
      <div id="contacto"></div>
			<div className="separador"></div>
        <div className="">
          <div className="subtitulos">
            <h2 className="aparece">Contacto</h2>
          </div>
          <div className="square-rotate"></div>
        </div>

				<div className="row">
					<div className="separadorRRSS"></div>
					<div className="col-lg-12 text-center">
						<h3 className="text-center">Redes Sociales</h3>
					</div>
				
					<div className="text-center row col-lg-12">
							
							<div className="col-lg-2"></div>

							<a id="cto-face" href="https://www.facebook.com/nutricionistafunesrosariosanlorenzo/" target="_blank" rel="noopener noreferrer" className="col-lg-2 btn-rrss btn-face my-auto">
								<img src={face} alt="logoFace" height="25em" />
							</a>

							<a id="cto-insta" href="https://www.instagram.com/nutricionistaguadalupefortuna/" target="_blank" rel="noopener noreferrer" className="col-lg-2 btn-rrss btn-insta my-auto">
								<img src={insta} alt="logoInstagram" height="25em"/>
							</a>

							<a id="cto-mail" href="mailto:guadafortuna@hotmail.com" className="col-lg-2 btn-rrss btn-mail my-auto">
								<img src={mail} alt="logoMail" height="25em"/>
							</a>

							<a id="cto-wapp" href="https://api.whatsapp.com/send?phone=5493413030908&text=Hola%20Lic.%20Guadalupe%20Fortuna,%20mi%20nombre%20es%20*ACA%20PONER%20TU%20NOMBRE*%20mi%20consulta%20es:%20" target="_blank" rel="noopener noreferrer" className="col-lg-2 btn-wapp btn-rrss my-auto">
								<img src={whapp} alt="logoWhapp" height="25em"/>
							</a>

							<div className="col-lg-2"></div>

							<div className="col-lg-12 separadorRRSS"></div>

					</div>
					<div className="col-lg-12 text-center">
							<h3>Consultorios</h3>
								<div className="row">
									<div className="col-lg-3"></div>

									<div id="consultorio1" className="col-lg-2 selectorUbicacion mt-1 ml-1 mr-1">Rosario</div>
									<div id="consultorio2" className="col-lg-2 selectorUbicacion mt-1 ml-1 mr-1">Funes</div>
									<div id="consultorio3" className="col-lg-2 selectorUbicacion mt-1 ml-1 mr-1">San Lorenzo</div>

									<div className="col-lg-3"></div>
								</div>
							<div className="separadorRRSS"></div>

					</div>
          <Mapas/>
      </div>
    </div>
  )
}

export default Contacto;