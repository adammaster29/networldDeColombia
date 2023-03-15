import React from 'react';

const Equipo = () => {
    return (
        <div> 
        <div className='padre-Equipo'>
            <br />
            <h1 className='titulo'>Nuestro Equipo</h1>
            <div className='container-cards'>
                {/* cards 1 */}
                <div className="card1">
                    <div className='container-img-equipo-Jaider'>

                        <div className='redes'>
                            <div className='efecto'>
                                <div>
                                    <i className='bx bxl-facebook-circle bx-tada bx-md' ></i>
                                    <i className='bx bxl-instagram bx-tada bx-md' ></i>
                                    <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md' ></i>
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
                                    <i className='bx bxl-facebook-circle bx-tada bx-md' ></i>
                                    <i className='bx bxl-instagram bx-tada bx-md' ></i>
                                    <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md' ></i>
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
                                    <i className='bx bxl-facebook-circle bx-tada bx-md  ' ></i>
                                    <i className='bx bxl-instagram bx-tada bx-md  ' ></i>
                                    <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md  ' ></i>
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
                                    <i className='bx bxl-facebook-circle bx-tada bx-md' ></i>
                                    <i className='bx bxl-instagram bx-tada bx-md' ></i>
                                    <i className='bx bxl-twitter bx-flip-horizontal bx-tada bx-md' ></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h5 className='tituloE'>name</h5>
                    <p className='texto-ocupacion'>ocupacion</p>
                </div>

            </div >




        </div>
                    {/* portada equipo */} <br /><br />

        <div className="padre-portada">
            <div className='img-portada'></div>
            <div className='container-contactanos'>
                <h2 style={{fontSize:"18PX",fontWeight:"900"}}>NETWORLD DE COLOMBIA S.A.S</h2>
                <p style={{fontSize:"18PX",fontWeight:"600"}}>CONTAMOS CON UN GRUPO DE PROFESIONALES ALTAMENTE CAPACITADOS.</p>
                 <a className='boton-portada' href="#">Contactános</a>
            </div>
            
        </div>
        </div>
    );
};

export default Equipo;