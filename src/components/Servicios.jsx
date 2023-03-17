import React from 'react';

const Servicios = () => {
    return (
        <div className='container-Servicios'><br />
            <h1 id='servicios' className='titulo' >Nuestros Servicios</h1>


            <div className="container_wrap">
                <div className='wrap'>
                    <img style={{ width: "110px", height: "110px" }} src="/img/Ethernet.png" alt="" />
                    <h5 className='subtituloServicios'>Manteniemiento de Redes</h5>
                    <p>Contamos con servicio especializado para el mantenimiento del cableado estructurado y las redes de voz y datos, Contamos con Profesionales y técnicos de telecomunicaciones especialistas en actividades de mantenimiento de cableado estructurado para oficinas, edificaciones y empresas en Colombia. Contamos con personal altamente capacitado para llevar a cabo todas las funciones.</p>
                </div>
                <div className='wrap'>
                    <img style={{ width: "110px", height: "110px" }} src="/img/web.png" alt="" />
                    <h5 className='subtituloServicios'> Creación y Diseño WEB</h5>
                    <p>Creamos experiencias de usuario memorables al crear diseños web exclusivos, personalizados, a su mejor estilo de marca y personalidad, adaptamos el contenido a cualquier dispositivo con las últimas tendencias visuales y técnicas. Te garantizamos la adecuada inserción en los medios digitales.

                        ofrecemos soluciones para todo tipo de personas o empresas que desean tener presencia en internet con una página web.</p>
                </div>
                <div className='wrap'>
                    <img style={{ width: "110px", height: "110px" }} src="/img/computadores.png" alt="" />
                    <h5 className='subtituloServicios'>Suministro de Computadores</h5>
                    <p>Brindamos soluciones tecnológicas en productos y servicios completamente ajustable a las necesidades de nuestros clientes.</p>
                </div>
                <div className='wrap'>
                    <img style={{ width: "110px", height: "110px" }} src="/img/sistema de comunicacion.png" alt="" />
                    <h5 className='subtituloServicios'>Instalación de sistemas de Comunicación</h5>
                    <p>Realizamos instalaciones, así como el mantenimiento técnico y/o correctivo de sistemas de comunicaciones para profesionales, ya sea para el sector público o privado, utilizando sistemas de última tecnología.</p>
                </div>
                <div className='wrap'>
                    <img style={{ width: "110px", height: "110px" }} src="/img/TV.png" alt="" />
                    <h5 className='subtituloServicios'>Redes de televisión por cable CATV</h5>
                    <p>Corporación de Telecomunicaciones de la Sabana con su plataforma tecnológica de cabecera de televisión y de la red HFC (Hibrido Fibra óptica y Coaxial) lleva hasta sus hogares la señal de Televisión y de banda ancha con inigualable calidad de señal de audio, video y velocidad en datos.</p>
                </div>


            </div><br /><br />

        </div>
    );
};

export default Servicios;