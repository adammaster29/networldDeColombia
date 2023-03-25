import React from 'react';

const Equipo = () => {
    return (
        <div> 
        <div className='padre-Equipo'>
            <br />
            <h1 id='equipo' className='titulo'>Nuestro Equipo</h1>
            <div className='container-cards'>
                {/* cards 1 */}
                <div className="card1">
                    <div className='container-img-equipo-Jaider'>

                        <div className='redes'>
                            <div className='efecto'>
                                <div>
                                   <a href="#" className='iconRedes' target='_blank'> <i className='bx bxl-facebook-circle bx-tada bx-md' ></i></a>
                                   <a href="#" className='iconRedes' target='_blank'>  <i className='bx bxl-instagram bx-tada bx-md' ></i></a>
                                   <a href="#" className='iconRedes' target='_blank'> <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md' ></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className='tituloE'>name</h5>
                    <p className='texto-ocupacion'>ocupacion</p>
                </div>

                {/* cards 2 */}
                <div className="card1">
                    <div className='container-img-equipo-Eiber'>

                        <div className='redes'>
                            <div className='efecto'>
                                <div>
                                   <a href="#" className='iconRedes' target='_blank'></a> <i className='bx bxl-facebook-circle bx-tada bx-md' ></i>
                                  <a href="#" className='iconRedes'  target='_blank'>  <i className='bx bxl-instagram bx-tada bx-md' ></i></a>
                                   <a href="#" className='iconRedes' target='_blank' > <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md' ></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h5 className='tituloE'>name</h5>
                    <p className='texto-ocupacion'>ocupacion</p>
                </div>
                {/* cards 3 */}
                <div className="card1">
                    <div className='container-img-equipo-Willian'>

                        <div className='redes'>
                            <div className='efecto'>
                                <div>
                                    <a href="#" className='iconRedes'  target='_blank'><i className='bx bxl-facebook-circle bx-tada bx-md  ' ></i></a>
                                    <a href="#" className='iconRedes'  target='_blank'><i className='bx bxl-instagram bx-tada bx-md  ' ></i></a>
                                   <a href="#" className='iconRedes'  target='_blank'> <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md  ' ></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h5 className='tituloE'>name</h5>
                    <p className='texto-ocupacion'>ocupacion</p>
                </div>
                {/* cards 4 */}
                <div className="card1">
                    <div className='container-img-equipo-Jhon'>

                        <div className='redes'>
                            <div className='efecto'>
                                <div>
                                   <a href="#" className='iconRedes' target='_blank'> <i className='bx bxl-facebook-circle bx-tada bx-md' ></i></a>
                                  <a href="#" className='iconRedes' target='_blank'>   <i className='bx bxl-instagram bx-tada bx-md' ></i></a>
                                   <a href="#" className='iconRedes'  target='_blank'> <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md' ></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h5 className='tituloE'>name</h5>
                    <p className='texto-ocupacion'>ocupacion</p>
                </div>

            </div ><br /><br />




        </div>
                    {/* portada equipo */} <br /><br />

        <div className="padre-portada">
            <div className='img-portada'></div>
            <div className='container-contactanos'>
                <h2 className='notranslate tituloPortada' > <span className='span-N'>N</span>ETWORLD DE COLOMBIA S.A.S</h2>
                <p className='subtituloPortada' >CONTAMOS CON UN GRUPO DE PROFESIONALES ALTAMENTE CAPACITADOS.</p>
                 <a className='boton-portada' href="mailto:adammaster29@gmail.com">Contactános</a>
            </div>
            
        </div>
        </div>
    );
};

export default Equipo;