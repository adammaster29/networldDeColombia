import React from 'react';

const DescripcionServicios = () => {
    return (

        <div className='padre-descripcion'>
            <h1 className="titulo">Descripción De Servicios</h1>
            <div >
                <table className='contenedor-tabla'>


                    <thead >

                    </thead>
                    <tbody  >
                        <p className='texto-titulo'>NETWORLD DE COLOMBIA</p>
                        <tr>
                            <td >Mantenimiento de Redes</td>
                            <td>Creación y Diseño WEB</td>
                        </tr>
                        <tr>
                            <td>Suministro de Computadores</td>
                            <td>Instalación de Sistemas de Comunicación</td>
                        </tr>
                        <tr>
                            <td>Redes de televisión por cable</td>
                            <td>Venta de Componentes electrónicos</td>

                        </tr>
                        <tr>
                            <td>Venta de Equipos Satélitales</td>
                            <td>Cobertura del servicio en cualquier punto</td>

                        </tr>
                        <tr>
                            <td>Servicio Inmediato</td>
                            <td>Personal capacitado para Soporte Técnico</td>

                        </tr>
                        <tr>
                            <td>Diversas Plataformas Técnologicas</td>
                            <td>Televisión por Fibra Óptica y cable Coaxial</td>

                        </tr>
                        <tr>
                            <td>Utilización de redes convergentes</td>
                            <td>Garantía Permanente de Conexión
                            </td>

                        </tr>
                        <tr>
                            <td>Velocidad de transmisión</td>

                        </tr>
                    </tbody>
                    <a className='boton-consultanos' href="mailto:adammaster29@gmail.com?subject=Descripcion de Servicios">Consultános</a>
                </table>
            </div>
            <br />
        </div>


    );
};

export default DescripcionServicios;