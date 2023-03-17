import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Carrusel = () => {

  

  return (

    // interval='1400'
    
    <Carousel className='carousel' fade  >
      
      <Carousel.Item  >
        <img
          className="d-block w-100 imgCarrusel"
          src="/img/img-redes.png"
          alt="First slide"
        />
        
        <Carousel.Caption className='mx-auto text-justify'>
          <h3 className='animacion mx-auto text-justify display-6 fw-bold' > NETWORLD DE COLOMBIA S.A.S</h3>
          <h3 className='animacion mx-auto text-break fw-bold'  >En La Vanguardia De La Tecnología.</h3>
          {/* <div className='btnB ' ></div> */}<br /><br />
          <button  className='button-carrusel animacion mg' >Ver Servicios</button> <button className='button-carrusel animacion mg'>Leer Mas</button>
        </Carousel.Caption>
   
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgCarrusel"
          src="/img/img-network.jpg"
          alt="Second slide"
        />
       
        <Carousel.Caption className='mx-auto text-justify'>
          <h3 className='animacion mx-auto text-justify display-6 fw-bold' > NETWORLD DE COLOMBIA S.A.S</h3>
          <h3 className='animacion mx-auto text-break fw-bold' >En La Vanguardia De La Tecnología.</h3>
          {/* <div className='btnB '></div> */} <br /><br />
          <button  className='button-carrusel animacion mg' >Ver Servicios</button> <button className='button-carrusel animacion mg'>Leer Mas</button>
        </Carousel.Caption>
        
      </Carousel.Item>

      <Carousel.Item className='Item'>
        <img
          className="d-block w-100 imgCarrusel"
          src="/img/img-fibra.png"
          alt="Third slide"
        />

        <Carousel.Caption className='mx-auto text-justify'>
          <h3 className='animacion mx-auto text-justify display-6 fw-bold' > Cumplimos con los requerimientos de nuestros clientes.</h3>
          <h3 className='animacion  mx-auto text-break  fw-bold'  >Somos tu mejor opcion.</h3>
          {/* <div className='btnB boton3 '></div> */}
          <button  className='button-carrusel animacion' >Ver Servicios</button> <button className='button-carrusel animacion'>Leer Mas</button>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    
  );
};

export default Carrusel;