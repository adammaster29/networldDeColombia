import React from 'react';

const Equipo = () => {
    return (
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
                    <h5 className='tituloE'>Jaider Jimenez</h5>
                    <p className='texto-ocupacion'>Seo</p>
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
                    <h5 className='tituloE'>Eiber Pérez</h5>
                    <p className='texto-ocupacion'>Técnico Áutomotriz</p>
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
                    <h5 className='tituloE'>William Ortega</h5>
                    <p className='texto-ocupacion'>Jefe de Laboratorio</p>
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
                    <h5 className='tituloE'>Jhon Powel</h5>
                    <p className='texto-ocupacion'>Seo Expert</p>
                </div>

            </div >
        </div>
    );
};

export default Equipo;