import React from 'react';

    import mercadopagologo from '../images/mercadopagologo.png';

const TtoOnline = () => {

  const mostrarInfoTtoOn = () => {
    const informacionTtoOn = document.querySelector('#informacionTtoOn');
    informacionTtoOn.classList.toggle('showInformacion');
}

  return(

    <div className="">
      <div id="tratamientoOnline"></div>
			<div className="separador"></div>
			<div className="contenido">
				<div className="subtitulos text-center">
					<h2>Tratamiento</h2>
					<h3>Online</h3>
				</div>
				<div className="square-rotate"></div>
			</div>

      <div className="separadorRRSS"></div>

						<button className="btnInfo" id="mostrarInformacionTtoOn" onClick={mostrarInfoTtoOn}>Información</button>
            <div className="separadorRRSS"></div>
						<div className="hideInformacion" id="informacionTtoOn">
							<p>ESTA SECCION SE LLAMA INFORMACION DE TRATAMIENTOS ONLINE</p>
							<p>ESTA PARTE DESPUES SE HACE COMO VOS GUSTES. TE RECOMIENDO QUE PONGAS EN ESTE SECTOR LA ORGANIZACION QUE A VOS MAS TE SIRVA. TE RECOMENDARIA QUE LO HAGAS MASO COMO DICE AHI. QUE MANTENGAS UN CONTACTO A TRAVES DE EMAIL O WHATSAPP, PERO QUE ACLARES QUE LAS COSAS SE ENVIAN CUANDO EL DINERO ES DEPOSITADO EN TU CUENTA DE MERCADOPAGO.</p>
							<p>El tratamiento online se trata de un proceso para corregir hábitos saludables o construirlos, mejorar la organización de nuestra rutina y alimentación y establecer un orden para las
							comidas, siempre comprendiendo la necesidad y la cotidianidad de cada paciente.</p>

							<p>- Los controles se realizan vía correo electrónico dos días al mes que se coordinan con cada paciente. También en esas dos instancias se pueden resolver dudas o conversar sobre
							cualquier eventualidad durante el tratamiento.</p>

							<p>- Cada control sirve para observar la evolución de cada caso. En los mismos se pueden adjuntar fotos, observar pesaje, ajustar rutinas, etc. siempre en base a los objetivos que se pautaron previamente.</p>

							<p>- ¿Quiénes pueden realizar este tratamiento? Cualquier persona que tenga deseos de bajar de peso de manera saludable, aumentar su masa muscular o tratar enfermedades metabólicas
							como la diabetes, hipertensión o colesterol. Pueden hacerlo personas vegetarianas, embarazadas o con celiaquía.</p>

							<p>- El costo del mismo es mensual.</p>

							<p>- Una vez que se acredita el primer pago, el paciente completará una ficha online, que consta de los objetivos que desea lograr, una historia clínica, y una anamnesis alimentaria, es decir, un conjunto de datos sobre datos personales, estudios recientes, gustos alimenticios, rutina diaria, horarios, etc.</p>

							<p>- Luego de enviada la primera ficha, el paciente recibe automáticamente el primer plan de alimentación y sus correspondientes aclaraciones según cada caso. Además, de las instrucciones para continuar (se trabajara con registro de alimentación escrito y visual, recetas, y se le enseñara al paciente a pesarse y tomarse las medidas corporales). Después de esto, a los 15 días se realizará el primer control y a los 15 días siguientes el último control del mes. En ambos controles se irá modificando el plan, de acuerdo a las necesidades de cada paciente.</p>

							<p>- Cuando el tratamiento finaliza, el paciente puede decidir volver a retomarlo, observando el proceso y los objetivos planteados inicialmente y abonando nuevamente el costo por mes.</p>
						</div>

          <div className="separadorRRSS"></div>
			
          <div className="btShopMercadoPago">
            <div className="container">
                <h3 className="text-center Rockness">Un mes Completo</h3>
                <p className=" textoMercadoPago">Si querés, podés abonar un mes completo de consulta a través de MercadoPago... Acá Wanda puede poner cuántas consultas incluye, qué seguimiento se hace a través de whatsapp, motivación para el paciente, recetas, viandas, o lo que incluya este paquete de un mes que se paga por adelantado a través de Mercado Pago con tarjetas de débito o crédito.</p>
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

export default TtoOnline;