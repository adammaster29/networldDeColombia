import React from 'react';

const Acerca_de = () => {
    return (
        <div className='containerAcerca' ><br /><br />

<button class="btn-cssbuttons">
                <span style={{
                    color
                        : "white",zIndex:2,position:"absolute"
                }}>Redes</span>
                <ul className='redes-fixed'>
                    <li>
                        <a href="#" target='_blank'><i  style={{color:"white"}} class='bx bxl-twitter bx-sm'></i></a>
                    </li>
                    <li>
                        <a href="#" target='_blank'> <i  style={{color:"white"}} class='bx bxl-facebook-circle bx-sm' ></i></a>
                    </li>
                    <li>
                        <a href="#" target='_blank'><i  style={{color:"white"}} class='bx bxl-instagram bx-sm' ></i></a></li></ul></button>





                           

















            <h1 id='acerca' className='notranslate titulo' >Acerca De Networld Colombia S.A.S</h1> 
            <div className='contenedor-padre-acerca'>
                
                <img src='/img/logo.jpeg' alt='' className='img-acerca' />
               
                
                <div className='text-acerca'>
                    <h5  className='notranslate tituloGeneral'><span className='span-N'>N</span>ETWORLD DE COLOMBIA S.A.S</h5><br />
                    <p>Somos una empresa magangueleña dedicada a brindar soluciones en redes de telecomunicaciones e información.</p>
                    <p>Contamos con personal profesional calificado para prestar un servicio con eficiencia y calidad.</p>
                    <p>Poseemos cinco años de experiencia en la comercializacion de productos tecnológicos, la implementación de redes de telecomunicación y el diseño de páginas web. Estamos comprometidos con el desarrollo de nuestra región con proyección nacional y mundial.</p>
                    <p>Se compromete a ofrecer soluciones creativas y escalables para todos.</p>
                    <p>Todos nuestros clientes son únicos y nuestros servicios son altamente personalizables. Obtenga información sobre nuestra oferta y comuníquese con nosotros en caso de dudas o para programar una cita.</p>
                </div>

            </div>
            <br /><br /><br />
        </div>
    );
};

export default Acerca_de;