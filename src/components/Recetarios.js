import React from 'react';
import mercadopagologo from '../images/mercadopagologo.png';

const Recetarios = () => {
  return(
    <div>
      <div className="" id="recetarios"></div>
			<div>
					<div className="subtitulos">
						<h2>Recetarios</h2>
						<h3>Recetas ricas y saludables</h3>
					</div>
					<div className="square-rotate"></div>
			
				<div className="separador"></div>

				<div className="container">
					<p>No es lógico ni saludable comer siempre lo mismo. En primer lugar porque nos perdemos la riqueza de variedad, sabores y nutrientes que la naturaleza tiene para ofrecernos, y en segundo lugar (no menos importante), porque los requerimientos de nuestro organismo no son los mismos cuando hace frío o cuando hace calor.<br/>
					Por esto, tenés a tu alcance, estos recetarios con comidas adecuadas para cada momento del año.</p>
				</div>

				<div className="separador"></div>

				<div className="row">
					<div className="col-lg-1 col-md-1"></div>
					<div className="col-lg-10 col-md-10 text-center bordeRecetario">
						<h3>Verano</h3>
						<p><span>El Recetario Verano n1</span> cuenta con 4 secciones saludables imperdibles!! Tenemos Sección de <span>“Ensaladas Atrevidas”</span> donde vas a poder encontrar diferentes formas de comer verduras, frescas, ricas, saludables y sobretodo con nuevos sabores. <span>“Dips Amigueros”</span> para esos momentos donde el verano presta a juntarse, compartir y disfrutar, pero ¿porque no con opciones mas saludables?.<br/>
						Sección <span>“Venciendo la Monotonía”</span>, Donde vas a tener ideas para tus almuerzos y cenas saludables, bajas en calorías y grasas y sobretodo riquísimas para toda la familia. Y por último <span>“Momento dulce”</span> para los amantes de algo rico después de comer, unos postres frescos, sin horno, ideales para disfrutar y cuidarnos en verano.</p>
						<div className="fondobtn">
								<a href="www.mercadopago.com"><img className="" src={mercadopagologo} alt="mercadopagologo" /></a>
						</div>
					</div>
					<div className="col-lg-1 col-md-1"></div>
					<div className="col-lg-12 col-md-12 separador"></div>
					<div className="col-lg-1 col-md-1"></div>
					<div className="col-lg-10 col-md-10 text-center bordeRecetario">
						<h3>Invierno</h3>
						<p>
						El Recetario Saludable de temporada <span>Otoño-Invierno,</span> para que el frío no sea una excusa para no comer sano. Vas a encontrar ideas ricas y fáciles para <span>vegetarianos, celiacos,</span> y todos aquellos que quieran llevar una <span>vida sana.</span> Además, el recetario cuenta con Tips, información nutricional y los beneficios que aporta cada menú. El recetario tiene <span>25 recetas:</span> 10 recetas para <span>Desayunos</span> y meriendas (Panqueques de Café, muffins integrales de zanahoria y banana, pan integral semillado, galletitas de algarroba, budín de mandarina y amapola, y más). 10 recetas para <span>Almuerzos</span> y Cenas ( Canelones sin harina, Tacos integrales de pollo, Rolls de carne, Hamburguesas de quínoa y remolacha, Pizza sin harina, y más). 5 recetas de <span>postres</span> (Cheescake de frutillas, budín de pan, Bizcochuelo integral frutal, Alfajorcitos de harina de arroz y dulce de leche, Lemon Pie).
						</p>
						<div className="fondobtn">
								<a href="www.mercadopago.com"><img className="" src={mercadopagologo} alt="mercadopagologo" /></a>
						</div>
					</div>
					<div className="col-lg-1 col-md-1"></div>
				</div>

				<div className="separador"></div>

			</div>
    </div>
  )
}

export default Recetarios;