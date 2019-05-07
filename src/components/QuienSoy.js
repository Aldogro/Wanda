import React from 'react';
import guanda from '../images/guanda.jpg';

const QuienSoy = () => {
  return(

    <div>
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

    </div>
  )
}

export default QuienSoy;