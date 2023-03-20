import React from 'react';

const BeneficioDeCliente = () => {
    return (
        <div className='containerpadre'>  <br />
         <h1 id='cliente' className="titulo">Trabajamos En Beneficio De Nuestros Clientes</h1><br /><br />
            <div className='containerPadreCards'>
              
                <div className="containerCard cards1">
                    <img className='img-cards' src="https://img.freepik.com/foto-gratis/negocios-reunion-plan-analisis-grafico-empresa-estrategia-financiera_74952-1347.jpg?w=2000" alt="" />
                    <h5 className='textoUp'>titulo</h5>
                    <p className='textoUp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="containerCard cards2">
                    <img className='img-cards' src="https://img.freepik.com/foto-gratis/negocios-reunion-plan-analisis-grafico-empresa-estrategia-financiera_74952-1347.jpg?w=2000" alt="" />
                    <h5 className='textoUp'>titulo</h5>
                    <p className='textoUp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="containerCard cards3">
                    <img className='img-cards' src="https://img.freepik.com/foto-gratis/negocios-reunion-plan-analisis-grafico-empresa-estrategia-financiera_74952-1347.jpg?w=2000" alt="" />
                    <h5 className='textoUp'>titulo</h5>
                    <p className='textoUp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
           </div>

            <div>
                
            </div>
            <br />
            <div className="containerCotizacion">
                    <h3>Bienvenidos a Nuestra Empresa NETWORLD DE COLOMBIA S.A.S</h3>
                    <a className='btnCotizar' href="mailto:adammaster29@gmail.com?subject=Servicios De Cotizacion">Consigue Una Cotizacion</a>
                </div>
        </div>
    );
};

export default BeneficioDeCliente;