import React, { useState, useEffect } from 'react';

const ProgresoCircular = () => {
    const [progress, setProgress] = useState(0);
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 79) {
          clearInterval(intervalId);
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);
//   PROGRESS1
useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress1(prevProgress => {
        if (prevProgress >= 69) {
          clearInterval(intervalId);
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  //PROGRESS2
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress2(prevProgress => {
        if (prevProgress >= 38) {
          clearInterval(intervalId);
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);


    return (
        <div className='container-progresso'>
            <div  className='progressoflex animacion'   >
                <div style={{ borderRadius: "50%", width: '170px', height: "150px" }} class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style={{ width: `${progress}%` }}>{progress}%</div>
                   
                </div>
                <span>Mantenimiento de Redes</span>
            </div>

            <div className='progressoflex animacion'>   
            <div style={{ borderRadius: "50%", width: '170px', height: "150px" }} class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style={{ width: `${progress1}%` }}>{progress1}%</div>
                
            </div>
            <span>Creación y Diseño WEB</span>
            </div>  

            <div className='progressoflex animacion'> 
            <div style={{ borderRadius: "50%", width: '170px', height: "150px" }} class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style={{ width: `${progress2}%` }}>{progress2}%</div>
               
            </div>
            <span>Suministros de Equipos</span>
            </div>
        </div>
    );
};

export default ProgresoCircular;