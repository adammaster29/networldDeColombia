
import React, { useState } from 'react';

function PorqueElegirnos() {
    const [showText, setShowText] = useState(false);
    const [showText1, setShowText1] = useState(false);

    return (
        <div className='padre-porqueElegirnos'>
            <div>
                <img src="/img/paquete internet.jpeg" alt="" />
                <div>
                    <button onClick={() => setShowText(!showText)}>NETWORLD de Colombia S.A.S</button>
                    {showText && <div>Este es el texto que se mostrará u ocultará</div>}
                </div>

            </div>


           

                <div className='container-padretext-btn'>
                    <div className='container-btnElegirnos'> 
                    <button className='btn-text' onClick={() => setShowText(!showText)}>Television por Suscripcion</button>
                    <button className='btn-text' onClick={() => setShowText1(!showText1)}>Corpotelsa</button>
                    </div>
                    {showText && <div>Este es el texto que se mostrará u ocultará</div>}
                   
                    {showText1 && <div>Este es el texto que se mostrará u ocultará</div>}
                </div>

            


        </div>
    );
}

export default PorqueElegirnos;
