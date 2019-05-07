import React, {Component} from 'react';
import guanda from '../images/guanda.jpg';
import face from '../images/facebook.svg';
import insta from '../images/instagram.svg';
import mail from '../images/envelope.svg';
import whapp from '../images/whatsapp.svg';


class Header extends Component {

  render(){

    return(
      <header>
        <div id="quienSoy"></div>
        <div className="subtitulos">
          <h2>Nutricionista</h2>
          <h3>Lic. Guadalupe Fortuna</h3>
        </div>
        <div className="square-rotate"></div>

      {/* Seccion Quien Soy */}
			
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<h2 className="text-center">Quién soy</h2>
							<p>Mi nombre es <b>Wanda</b>, soy Licenciada en Nutrición,  <b>MP: 1111</b>, egresada de la <b>Universidad que me queda cerca de casa</b>, estoy casada con Nemi, y vivimos en la provincia de Santa Fe. Hice varios cursos y especializaciones, y en 2015 realice un posgrado sobre El Cuidado Nutricional de pacientes con Enfermedades de Riesgo Cardiovascular (sobrepeso, obesidad, colesterol alto, diabetes, hipertensión, sedentarismo). Es un objetivo, seguir capacitándome y creciendo en esta profesión, que tanto tiene para brindar. Trabajo en consultorios particulares, donde atiendo niños, adolescentes y adultos. Además doy charlas de Nutrición Saludable y clases de cocina, en jardines, escuelas, gimnasios, etc. También escribo para la Revista Mujeres Bautistas de Argentina, donde comparto sobre diversos temas de Nutrición, dándole no solo un enfoque físico, sino a su vez, espiritual.</p>
						</div>
						<div className="col-lg-6 text-center my-auto">
							<img className="redonda" alt="Guada" src={guanda} width="70%"/>
						</div>
					</div>
				</div>

       <div className="separador"></div>


       <div id="contacto"></div>
			<div className="">
				<div className="subtitulos">
					<h2>Contacto</h2>
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
							<nav aria-label="Page navigation example">
									<ul className="pagination justify-content-center">
										<li className="page-item"><a className="page-link" href="#contacto">Córdoba 6499</a></li>
										<li className="page-item"><a className="page-link" href="#contacto">Mendoza 5800</a></li>
										<li className="page-item"><a className="page-link" href="#contacto">Avellaneda 1300</a></li>
									</ul>
								</nav>
					</div>
					<div className="mapas">
						<div>
							{/* ACA VA EL IFRAME DE GOOGLE MAPS */}
						</div>
							
					</div>
				</div>

				<div className="separador"></div>

{/* SECCION OBJETIVOS PRINCIPALES */}

			<div id="objetivos"></div>
			<div className="">
				<div className="subtitulos">
					<h2>Objetivos</h2>
					<h3>Principales</h3>
				</div>
				<div className="square-rotate"></div>
			</div>
			<div className="separador"></div>
			<div className="contenido">
				<div className="container">
							<p>El fin de nuestra página es que puedas aprender sobre como llevar día a día una <b>alimentación saludable e inteligente;</b> donde encuentres recetas ricas y fáciles, tips de nutrición y deporte, artículos de revistas o notas interesantes, consultorio online, etc. Pero creemos que para que una persona este sana y feliz, no podemos centrarnos únicamente en nutrición de su cuerpo. ¿Por qué? Porque el ser humano es: <b>Mente + Alma + Espíritu + Cuerpo.</b> Por lo tanto, nuestro enfoque no solo va dirigido al cuerpo, sino que tenemos con fin, que sea un lugar donde puedas nutrir también tu mente, alma y espíritu.</p>
				</div>
			</div>
			
			<div className="separador"></div>


{/* SECCION RECETAS */}
			<div id="noMasDietas"></div>
				<div className="contenido wide bg">
					<div className="subtitulos">
						<h2 className="fadeIn">No hagas más dietas.<br/> <i>¡Mejorá tus hábitos!</i></h2>
					</div>
					<div className="square-rotate"></div>
				</div>
			<div className="separador"></div>

      </header>
    )
  }
}

export default Header;