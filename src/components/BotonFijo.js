import React from 'react';

    import whatsapp from '../images/whatsapp.svg';

const BotonFijo = () => {
  return(

    <div className="">
      <div id="botonFijo" className="btnshadow">
        <a href="https://api.whatsapp.com/send?phone=5493413030908&text=Hola%20Lic.%20Guadalupe%20Fortuna,%20mi%20nombre%20es%20*ACA%20PONER%20TU%20NOMBRE*%20mi%20consulta%20es:%20"><img width="100%" src={whatsapp} alt="wapplogo"/></a>
		  </div>
    </div>
  )
}

export default BotonFijo;