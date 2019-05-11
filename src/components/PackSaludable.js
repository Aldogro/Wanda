import React from 'react';

    import plusPack from '../images/plus-pack.png';

const PackSaludable = () => {
  return(
    <div>

      <div className="" id="packSaludable"></div>
      <div className="separador"></div>
    
          <div className="subtitulos text-center">
            <h2>Pack</h2>
            <h3>Saludable</h3>
          </div>
          <div className="square-rotate"></div>

          <div className="container">
            <div className="separador"></div>
            <div>
              <p>El pack saludable está diseñado para aquellas personas que quieren comenzar un cambio de hábitos, pero no saben por dónde empezar. Una propuesta sencilla y económica. Cualquier duda acerca del producto, no dudes en ponerte en contacto!</p>
            </div>
          </div>

          <div className="subtitulos">
            <div className="text-center">
              <p><b><img src={plusPack} alt="plusImg"/> Recetario Saludable nº1</b></p>
              <p><b><img src={plusPack} alt="plusImg"/> Menú semanal</b></p>
              <p>(propuestas fáciles y sanas para todos los días; con recetas incluidas</p> 
              <p>para Desayunos y Meriendas, Almuerzos y Cenas)</p>
              <p><b><img src={plusPack} alt="plusImg"/> IDEAS</b> de colaciones/snacks dulces y salados</p>
              <p><b><img src={plusPack} alt="plusImg"/> TIPS</b> para comenzar un estilo de vida saludable</p>
            </div>
            <div className="text-center btnPackSaludable">
                <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Comprar
            </div>
          </div>

        <div className="separador"></div>
    </div>
  )
}

export default PackSaludable;