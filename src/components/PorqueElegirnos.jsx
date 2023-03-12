
import React, { useState } from 'react';

function PorqueElegirnos() {

    const [showText, setShowText] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);


    //controlar mostar u ocultar
    const [mostrarTexto1, setMostrarTexto1] = useState(false);
    const [mostrarTexto2, setMostrarTexto2] = useState(false);
    const [mostrarTexto3, setMostrarTexto3] = useState(false);

    const handleClickBoton1 = () => {
        setMostrarTexto1(true);
        setMostrarTexto2(false);
        setMostrarTexto3(false);
        setShowText(!showText)
    };

    const handleClickBoton2 = () => {
        setMostrarTexto1(false);
        setMostrarTexto2(true);
        setMostrarTexto3(false);
        setShowText1(!showText1)
    };
    const handleClickBoton3 = () => {
        setMostrarTexto1(false);
        setMostrarTexto2(false);
        setMostrarTexto3(true);
        setShowText2(!showText2)
    };


    return (
        <div className='container-all'> <br />
            <h1 className='titulo'>Por Que Elegirnos</h1><br />

        <div className='padre-porqueElegirnos'>
            
            <div>
                <img src="/img/paquete internet.jpeg" alt="" />
                <div>
                    <button className='btn-text' onClick={() => setShowText3(!showText3)}>NETWORLD de Colombia S.A.S</button>
                    {showText3 && <div className='textoizq-netbtn'>Este es el texto que se mostrará u ocultará</div>}
                </div>

            </div>




            <div className='container-padretext-btn'>
                <div className='container-btnElegirnos'>
                    <button className='btn-text' onClick={handleClickBoton1}>Television por Suscripcion</button>
                    <button className='btn-textC' onClick={handleClickBoton2}>Corpotelsa</button>
                    <button className='btn-textC' onClick={handleClickBoton3}>planes</button>
                </div>


                {showText && mostrarTexto1 && <div className='mostrar-texto'><h2>Razones Para Estar Con CORPOTELSA</h2><ul>
                    <li className='chulo'>Cobertura del servicio en cualquier punto.</li><br />
                    <li className='chulo'>Instalación oportuna de los paquetes de servicios para disfrutarlos inmediatamente.</li><br />
                    <li className='chulo'>Respaldo del mejor y más capacitado equipo humano para el soporte técnico que garantizan la continuidad y calidad del servicio.</li><br />
                    <li className='chulo'>Con la fortaleza de diversas plataformas tecnológicas de Nueva Generación (TV, Telefonía IP, Banda ancha inalámbrica) generamos soluciones integrales de telecomunicaciones para los sectores residencial, comercial y empresarial.</li><br />
                    <li className='chulo'>Brindamos acceso a múltiples servicios de telefonía fija e IP, Televisión por cable e Internet de alta velocidad por medio de Cable Modem y ADSL.</li><br />
                    <li className='chulo'>Utilización de redes convergentes, en cobre, inalámbrica y HFC (Híbrido fibra óptica y coaxial) con la garantía de conectividad de todos los servicios.</li><br />
                    <li className='chulo'>Garantía permanente de la conexión sin interrupción de los servicios de telefonía, televisión e internet con la velocidad de transmisión solicitada.</li><br />
                </ul>
                </div>}
                {showText1 && mostrarTexto2 && <div className='mostrar-texto'>Qué esperas para vivir una nueva experiencia en entretenimiento?</div>}
                {showText2 && mostrarTexto3 && <div className='mostrar-texto'> <h5>Planes</h5>
                    <p>Elige el plan que se ajuste a tus necesidades y accede a la mejor programación con <span>CORPOTELSA.</span></p>

                    <p>Servicio de internet operado por <span>SENERGITEL</span></p>

                    <span>Llama ya al +57 (300) 317-2840 y adquiere los nuevos planes!!!</span>

                    <p>La Tárifa varía de acuerdo al estrato y plan deseado.</p>
                    </div>}
            </div>



<br /><br /><br />
        </div>
        </div>
    );
}

export default PorqueElegirnos;
