import React from 'react';

    import mercadopagologo from '../images/mercadopagologo.png';

const PlanesAlimentacion = () => {

  const mostrarInfo = () => {
      const informacion = document.querySelector('#informacion');
      informacion.classList.toggle('showInformacion');
  }

  const mostrarInfoGen = () => {
      const informacionGen = document.querySelector('#informacionGen');
      informacionGen.classList.toggle('showInformacion');
  }

  return(

    <div className="">
      <div id="planPersonalizado"></div>
      <div className="separador"></div>

        <div className="subtitulos text-center">
          <h2><span>Plan de</span> Alimentación</h2>
          <h3>Personalizado</h3>
        </div>
        <div className="square-rotate"></div>

        <div className="separadorRRSS"></div>

        <button className="btnInfo" id="mostrarInformacion" onClick={mostrarInfo}>Información</button>
        <div className="separadorRRSS"></div>
        <div className="hideInformacion" id="informacion">
          <p>El plan de alimentación es personalizado acorde a la ficha técnica de cada paciente, quién previamente deberá completar informando su edad, sexo, peso, rutina diaria, actividad física, patología particular, etc. Con estas consideraciones, teniendo en cuenta su gasto calórico y sus objetivos se evaluará un plan de alimentación con un menú detallado.</p>

          <p>Se trata de recetas sencillas, de fácil aplicación y explicados pasos a paso, incluso acompañadas por una lista de compras.</p>

          <p>Además se le enviaran recetas y listas de compras, que sirvan como ideas y herramientas para desarrollar en el hogar, de modo que pueda continuar transformando la alimentación en un hábito saludable.</p>

          <p>El paciente, una vez recibido el plan de alimentación, puede enviar un email con preguntas y dudas al respecto y, en un lapso de 72hs (hábiles), le llegará la respuesta.</p>

          <p>El envío y evacuación de dudas o preguntas es exclusivamente a través del email. En caso que el paciente quiera, puede renovar todos los meses el plan de alimentación, e ir modificando y corrigiendo hábitos de acuerdo a sus necesidades.</p>
        </div>	

        <div className="separadorRRSS"></div>
 
        <div className="btShopMercadoPago">
          <div className="container">
            <p className=" textoMercadoPago">Acá Wanda puede poner cuántas consultas incluye, qué seguimiento se hace a través de whatsapp, motivación para el paciente, recetas, viandas, o lo que incluya este paquete de un mes que se paga por adelantado a través de Mercado Pago con tarjetas de débito o crédito.</p>
            <div className="text-center mt-3">
              <div className="fondobtn">
                <a href="www.mercadopago.com"><img src={mercadopagologo} alt="mercadopagologo"/></a>
              </div>
              <p>Aboná la promo con MercadoPago</p>
            </div>
          </div>
        </div>

        <div className="separador"></div>

        <div id="planGeneralizado"></div>
        <div className="separador"></div>
        <div className="subtitulos text-center">
          <h2>Plan de Alimentación</h2>
          <h3>Generalizado</h3>
        </div>
        <div className="square-rotate"></div>			

        <div className="separadorRRSS"></div>
          
        <button className="btnInfo" id="mostrarInformacionGen" onClick={mostrarInfoGen}>Información</button>
        <div className="separadorRRSS"></div>
        <div className="hideInformacion" id="informacionGen">
          <p>De acuerdo a cada necesidad, patología u objetivo que tengas, se diseñaron esquemas de alimentación, con recetas, listas de compras para dietética, tips saludables al momento de cocinar, elegir productos y comprar. Como también una guía para saber leer etiquetas nutricionales de alimentos y así elegir correctamente, de acuerdo a cada necesidad.</p>
        </div>
        
        <div className="separadorRRSS"></div>


				<div className="btShopMercadoPago">
					<div className="container">
							<p className=" textoMercadoPago">Acá Wanda puede poner cuántas consultas incluye, qué seguimiento se hace a través de whatsapp, motivación para el paciente, recetas, viandas, o lo que incluya este paquete de un mes que se paga por adelantado a través de Mercado Pago con tarjetas de débito o crédito.</p>
							<div className="text-center mt-3">
								<div className="fondobtn">
                  <a href="www.mercadopago.com"><img src={mercadopagologo} alt="mercadopagologo"/></a>
								</div>
								<p>Aboná la promo con MercadoPago</p>
							</div>
					</div>
				</div>
				

    </div>
  )
}

export default PlanesAlimentacion;