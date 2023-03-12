import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Carrusel = () => {
  return (

    
    
    <Carousel className='carousel' fade>
      
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src="/img/img-redes.png"
          alt="First slide"
        />
        
        <Carousel.Caption className='center-text'>
          <h3 className='animacion' style={{ fontSize: "45px", fontWeight: 900 }}> NETWORLD DE COLOMBIA S.A.S</h3>
          <p className='animacion'  style={{ fontSize: "30px", fontWeight: 600 }}>En La Vanguardia De La Tecnología.</p>
          <div className='btn animacion' ><button  className='button-carrusel' >Ver Servicios</button> <button className='button-carrusel'>Leer Mas</button></div>
        </Carousel.Caption>
   
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/img-network.jpg"
          alt="Second slide"
        />
       
        <Carousel.Caption className='center-text'>
          <h3 className='animacion' style={{ fontSize: "45px", fontWeight: 900 }}> NETWORLD DE COLOMBIA S.A.S</h3>
          <p className='animacion'  style={{ fontSize: "30px", fontWeight: 600 }}>En La Vanguardia De La Tecnología.</p>
          <div className='btn animacion'><button  className='button-carrusel' >Ver Servicios</button> <button className='button-carrusel'>Leer Mas</button></div>
        </Carousel.Caption>
        
      </Carousel.Item>

      <Carousel.Item className='Item'>
        <img
          className="d-block w-100"
          src="/img/img-fibra.png"
          alt="Third slide"
        />

        <Carousel.Caption className='center-text'>
          <h3 className='animacion' style={{ fontSize: "45px", fontWeight: 900 }}> Cumplimos con los requerimientos de nuestros clientes.</h3>
          <p className='animacion'  style={{ fontSize: "30px", fontWeight: 600 }}>Somos tu mejor opcion.</p>
          <div className='btn animacion'><button  className='button-carrusel' >Ver Servicios</button> <button className='button-carrusel'>Leer Mas</button></div>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    
  );
};

export default Carrusel;