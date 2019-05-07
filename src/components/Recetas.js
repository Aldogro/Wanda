import React from 'react';
import receta1 from '../images/receta1.jpg';
import receta2 from '../images/receta2.jpg';
import receta3 from '../images/receta3.jpg';
import receta4 from '../images/receta4.jpg';
import receta5 from '../images/receta5.jpg';
import receta6 from '../images/receta6.jpg';
import receta7 from '../images/receta7.jpg';
import receta8 from '../images/receta8.jpg';
import receta9 from '../images/receta9.jpg';
import receta10 from '../images/receta10.jpg';
import receta11 from '../images/receta11.jpg';

const Recetas = () => {
  return(
    <div>
    <div className="container">
      <p>Muchas veces el motivo de no llevar una alimentación saludable es por la falta de planificación y organización. Por eso, nuestro objetivo es que en esta sección puedas resolver a esas preguntas de ¿Qué comemos hoy? ¿Qué almorzamos en el trabajo? ¿Qué vianda llevo a la escuela?  Y puedas encontrar y aprender recetas fáciles y económicas para el día a día, para los más chiquitos de la casa, para las juntadas con amigos o para compartir en familia.</p>
    </div>

    <h2 className="text-center">Te dejo unas exquisitas recetas para que pruebes!</h2>
    <div className="separadorRRSS"></div>
        <div className="row">
          <div className="row">
						<div className="col-lg-12">
							<div className="row card-receta">
								<div className="col-lg-6 col-md-6 my-auto">
									<h3 className="text-center">Berenjenas Rellenas</h3>
									<ul>
										<li>
											Simple y Fácil, lavas las berenjenas cortas al medio y con una cuchara ahuecas, llevas unos minutos a cocción en agua hirviendo las retiras y dejas reposar.
										</li>
										<li>
											Mientras tanto preparas el relleno puerro + cebolla + morrón rojo + zanahoria, salteas todas las verduras con un poquito de agua hasta que estén tiernas retiras del fuego y agregas queso untable descremado.
										</li>
										<li>
											En una placa para horno colocas las berenjenas en mitades y rellenas.
										</li>
										<li>
											Por último agregas una porción de queso magro para gratinar.
											levas a horno fuerte unos 20 min.
										</li>
									</ul>
								</div>
								<div className="col-lg-6 col-md-6 text-center my-auto">
									<img width="100%" src={receta1} alt="receta1"/>
								</div>
							</div>
						</div>
          </div>
						

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Tarta Integral de Acelga</h3>
                <ul>
                  <li>
                      <b>Para la masa</b> ,150 grs de harina integral + 50 grs de harina de garbanzos (podes utilizar todo integral), 2 cucharadas soperas de aceite de girasol o de oliva + 100 cc de agua tibia + un pizca de sal, unis todo y amasas hasta formar el bollo, llevas a la heladera unos 10 minutos y luego la estiras en una placa de 26 CM previamente aceitada o rociada con spray vegetal llevas a horno fuerte unos 10 minutos. Retiras y reservas..
                  </li>
                  <li>
                      <b>Para el relleno:</b> 1/2 atado de acelga sin tallos + 2 cebollitas chicas + 1 puerro + 2 cucharadas de queso untable + 1 cucharada de maicena + cubos de queso magro.
                  </li>
                  <li>
                      Salteas las cebollas y el puerro y luego incorporas la acelga picadita en crudo y cocinas todo unos minutos mas, agregas la cucharada de maicena y las de queso untable, colocas el relleno sobre la masa integral y por último el queso magro, llevas a horno unos 15-20 min fuerte.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta2} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Galletas de Avena y Pasas</h3>
                <ul>
                  <li>
                    <b>Ingredientes:</b> 100 grs de Avena, 100 grs de harina Integral, 50 grs Azúcar mascabo, 1 cucharada de miel, 2 cucharadas de Aceite de girasol, 1 huevo, Esencia de vainilla, 1 puñado de Pasas de Uvas.(se puede reemplazar por chips de chocolate).
                  </li>
                  <li>
                    <b>Preparación:</b> En un bolw colocar todos los ingredientes secos, hacer una corona y agregar el huevo, el aceite, la miel y la escencia e ir integrando de a poco todos los ingredientes, ya formando una masa incorporar las pasas.
                  </li>
                  <li>
                    Luego llevar la masa a la heladera media hora, retirar y comenzar a armar las galles en una placa enmantecada y enharinada.
                  </li>
                  <li><i>Y unos 15 minutos al horno fuerte.</i></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta3} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Guiso de Lentejas Saludable</h3>
                <ul>
                  <li>
                      Lentejas 1/2 paquete ,que deje en remojo unas horitas, y las coloque en una olla cubriendolas con 3 tazas de agua natural.
                  </li>
                  <li>
                      Mientras prepare 1 zuchini en cubos,2 zanahorias en trozitos, 1 cebolla, 1/2 morrón, y 1 puñado de cubitos de calabaza. 
                  </li>
                  <li>
                      Agregue todo con las lentejas y comience la cocción a fuego mínimo 45 minutos. 
                  </li>
                  <li>Condimente con orégano, perejil, ajo, laurel, romero, pimienta y sal.</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta4} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Merienda Saludable</h3>
                <ul>
                  <li>
                      Mate cocido con leche descremada.
                  </li>
                  <li>
                      1 kiwi.
                  </li>
                  <li>
                      Tostadas con queso untable y  semillitas de amapola. 
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta5} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>
						
          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Budin de Acelga</h3>
                <ul>
                  <li>
                    <b>Ingredientes (rinde 4 porciones):</b> 1 atado de acelga sin los tallos, 2 cebollas chicas, 2 cucharadas soperas de salvado de avena, 2 huevos, 1 porción tamaño mazo de cartas de Queso magro, Pimienta,nuez moscada, provenzal, una pizca de sal.
                  </li>
                  <li>
                    <b>Preparación:</b> Saltear las cebollas y allí agregar la acelga cruda cortada dejar cocinar unos minutos, condimentar y añadir las cucharadas de salvado y los huevos, llevar a un molde la mitad de la preparación colocar el queso en tiritas y luego la otra mitad y listo. 
                  </li>
                  <li>
                    <i>Horno fuerte unos 20 minutos</i>, podes acompañar con una ensaladita de tomate y cebolla rehogada exquisito!!
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta6} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Pepas Saludables</h3>
                <ul>
                  <li>
                    <b>Ingredientes:</b> 1 taza de avena instantánea. 1/2 taza de harina de arroz (o podes utilizar de trigo,o de almendras o integral). 1 huevo. Ralladura de 1 naranja. 2 cucharadas soperas de azúcar blanca común o mascabo. 1 cucharada sopera de miel. Dulce de membrillo común o light 1 porción de 50 grs.
                  </li>
                  <li>
                    <b>Preparación:</b> Colocas todos los secos en un bol, haces un hueco y allí el huevo y la miel, unis todo con tus manos, hasta formar un bollito de masa. Separas en bollitos pequeños y vas formando las pepas. 
                  </li>
                  <li>
                    Por último el dulce que le agregué un chorrito de agua y lo lleve al microondas unos segundos, así se derritió, lo distribuís sobre las pepas. 
                  </li>
                  <li><i>Horno medio unos 20 minutos</i></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta7} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Albondigas de carne y verduritas + un pizca de arroz</h3>
                <ul>
                  <li>
                    <b>Ingredientes: </b>Carne picada magra 350 grs + 150 grs de salvado de avena + 1 huevo + 1 zanahoria rallada + orégano + ajo + pimienta + comino + 3 tomates medianos + 2 cebollas de verdeo + 1 cebolla + 2 cucharadas soperas de arroz crudo.
                  </li>
                  <li>
                    En un bol mezclas la carne + huevo + avena + zanahoria rallada + condimentos mezclamos y luego formamos las albóndigas con esto me salieron 15 chiquitas...
                  </li>
                  <li>
                    Por otro lado en la sartén con un chorrito de aceite colocas las cebollas y el tomate cocinas unos minutitos, agregas un vaso de agua o caldo sin sal, colocas las albóndigas y el arroz cocinar todooo junto 1/2 hora!!
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta8} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Calabaza Rellena</h3>
                <ul>
                  <li>
                    Media calabaza hervida o al horno. 
                  </li>
                  <li>
                    Rellenar con 3 cucharadas de choclo en grano + 1 cucharada sopera de queso untable + 3 tiritas de queso magro para gratinar + albahaca fresca + perejil + ajo. 
                  </li>
                  <li>
                    <i>Llevar unos minutos al horno hasta que gratine el queso.</i>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta9} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Ensalada Multicolor</h3>
                  <ul>
                    <li>
                        <b>Ingredientes: </b>Lomito de atún al natural + tomates cherry + repollo morado rayado + zanahoria rayada + hojas de rucula + 1 cucharadita de aceite de oliva + jugo de limón + vinagre. Sal c/n. 
                    </li>
                  </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta10} alt="receta-img" />
              </div>
            </div>
          </div>

          <div className="separador-receta col-lg-12"></div>

          <div className="col-lg-12">
            <div className="row card-receta">
              <div className="col-lg-6 col-md-6 my-auto">
                <h3 className="text-center">Merienda Saludable</h3>
                <ul>
                  <li>200 cc Yogurt bebible descremado de vainilla</li>
                  <li>Manzana 1/2</li>
                  <li>Almendras 30grs</li>
                  <li>Mix de semillas una cucharada sopera</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 text-center my-auto">
                <img width="100%" src={receta11} alt="receta-img" />
              </div>
            </div>
          </div>

        </div>
        <div className="separador col-lg-12"></div>
        </div>

  )
}

export default Recetas;