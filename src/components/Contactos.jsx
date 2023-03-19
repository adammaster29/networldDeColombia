import React from 'react';

const Contactos = () => {
    const lat = 9.256094440040119;
    const lng = -74.76601354935907;
    const delta = 0.01;

    const lng1 = lng - delta;
    const lat1 = lat - delta;
    const lng2 = lng + delta;
    const lat2 = lat + delta;



    return (
        <div className='containerPadreConctactos'><br />
            <h1 id='contactos' className='titulo'>Contactos</h1><br /><br />
            <div className="containerGrid">

                <div className="grid uno">
                    <i class='bx bx-mobile bx-md'></i>
                    <p>Télefono: <p>+57 300 814 6161</p><p>+57 301 772 4993</p> </p>
                    <span>Lunes - Sabado (7 am - 6 pm)</span>

                </div>
                <div className="grid dos">
                    <i class='bx bx-envelope bx-md'></i>
                    <p>Email: contacto@nwdecolombia.com</p>
                    <span>sitio web: www.networldecolombia.com</span>
                </div>
                <div className="grid tres"><i class='bx bx-map bx-md'></i>
                    <p>Dirección: Calle 16 # 29 - 43
                        Avenida Colombia, Barrio Santa Rita.</p>
                    <span>Magangue Bolivar</span></div>

                <div className="grid cuatro">
                    <iframe src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng1},${lat1},${lng2},${lat2}&layer=mapnik`} width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>



                </div>

                <div className="grid cinco">
                    <form className='formulario' action="" method="get">
                        <label htmlFor="">Nombre</label>
                        <input id='campoTexto' className='InputText' type="text" placeholder='Ingresar Nombre' />
                        <label htmlFor="">Email</label>
                        <input id='campoTexto' className='InputText' type="email" placeholder='Ingresar Email' required />
                        <label htmlFor="">asunto</label>
                        <input id='campoTexto' className='InputText' type="text" placeholder='Ingresar Asunto' /><br />
                        <textarea name="" id="" cols="35" rows="6" placeholder='Escribir Mensaje'></textarea><br />
                        <button className='btn btn-dark'>Enviar Mensajes</button>

                    </form>


                </div>

            </div>
            <div className="containerPadreCajaBox">
                <div className="cajaBox">
                    <h1 className='spanH1Footer'><span className='span-N'>N</span>etworld de Colombia S.A.S</h1>
                    <p>Trabajamos con Transparencia, Responsabilidad, Exclusividad e Innovación</p>
                    <div className='redesFooter' >
                     <a  href="#"   className='iconRedes' target='_blank' >  <i class='bx bxl-facebook-circle bx-md' ></i></a>
                       <a  href="#"  className='iconRedes'  target='_blank' > <i class='bx bxl-twitter bx-md'></i></a>
                       <a  href="twitter.com"   className='iconRedes' target='_blank' > <i class='bx bxl-instagram bx-md' ></i></a>

                    </div>
                </div>
                <div className="cajaBox">
                    <h1 className='tituloGeneral'>Informacion</h1>
                    <p>Para adquirir información Adicional puede comunicarse con Nosotros.</p>
                    <p>Tel: +57 300 814 6161</p>
                    <p>Email: contacto@nwdecolombia.com</p>
                    <p>Horario: Lunes a Sábado 7am-6pm</p>
                </div>
                <div className="cajaBox"><h1 className='tituloGeneral'>Instagram</h1></div>
            </div>
            <div className="ContainerDerechosReservados">

                <div className='DerechosReservados'>

                    <i class='bx bx-copyright' ></i>
                      <p>Copyright</p> 

                    <b> <span className='span-N NRojo'>N</span>etworld De Colombia.</b>

                    <p>Todos los derechos Reservados.</p>
                </div>
            </div>
        </div>
    );
};

export default Contactos;