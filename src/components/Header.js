import React, {Component} from 'react';

 		import barbg from '../images/bar-bg.jpg';

import Titulo from './Titulo';
import QuienSoy from './QuienSoy';

import Contacto from './Contacto';
import Objetivos from './Objetivos';
import Recetas from './Recetas';
import Recetarios from './Recetarios';
import PackSaludable from './PackSaludable';
import PlanesAlimentacion from './PlanesAlimentacion';
import TtoOnline from './TtoOnline';
import BotonFijo from './BotonFijo';



class Header extends Component {

  render(){

    return(
      <header>
			
			<Titulo />

			<QuienSoy />
				
      		 <div className="separador"></div>

			<Contacto />

					<div className="separador"></div>

			<Objetivos/>
			
					


					<div id="noMasDietas"></div>
							<div className="subtitulos">
								<h2 className="fadeIn">No hagas más dietas.<br/> <i>¡Mejorá tus hábitos!</i></h2>
							</div>
							<div className="square-rotate"></div>

					<div className="separador"></div>
			
			<Recetas/>

					<div className="separador"></div>
			
			<Recetarios />
			
					<img className="bar-bg mapas" src={barbg} alt="imgSeparador"/>
					<div className="separador"></div>
      
			<PackSaludable/>

				<div className="separador"></div>

			<PlanesAlimentacion />

				<div className="separador"></div>

			<TtoOnline/>

			<div className="separador"></div>

			<BotonFijo/>
			</header>
    )
  }
}

export default Header;