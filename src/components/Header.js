import React, {Component} from 'react';

import Titulo from './Titulo';
import QuienSoy from './QuienSoy';

import Contacto from './Contacto';
import Objetivos from './Objetivos';
import Recetas from './Recetas';
import Recetarios from './Recetarios';


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
			
			<div className="separador"></div>


			<div id="noMasDietas"></div>
					<div className="subtitulos">
						<h2 className="fadeIn">No hagas más dietas.<br/> <i>¡Mejorá tus hábitos!</i></h2>
					</div>
					<div className="square-rotate"></div>

			<div className="separador"></div>
			
			<Recetas/>

			<div className="separador"></div>
			
			<Recetarios />

      </header>
    )
  }
}

export default Header;