import React from 'react';

const ProgresoCircular = () => {

    return (
        <div className='container-progresso'>
            <div  className='progressoflex animacion'   >
                <div style={{ borderRadius: "50%", width: '170px', height: "150px" }} class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style={{ width: "80%" }}>80%</div>
                   
                </div>
                <span>Mantenimiento de Redes</span>
            </div>

            <div className='progressoflex animacion'>   
            <div style={{ borderRadius: "50%", width: '170px', height: "150px" }} class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "70%" }}>70%</div>
                
            </div>
            <span>Creación y Diseño WEB</span>
            </div>  

            <div className='progressoflex animacion'> 
            <div style={{ borderRadius: "50%", width: '170px', height: "150px" }} class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "39%" }}>39%</div>
               
            </div>
            <span>Suministros de Equipos</span>
            </div>
        </div>
    );
};

export default ProgresoCircular;