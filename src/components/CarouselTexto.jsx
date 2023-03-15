import React, { useState, useEffect, useRef } from 'react';

function CarouselTexto() {
  const [position, setPosition] = useState(0);
  const [numSlides, setNumSlides] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setNumSlides(document.querySelectorAll('.carousel-slide').length);

    intervalRef.current = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1 ) % numSlides);
            if(prevPosition + 4 == true ){
                prevPosition +3
            }else{prevPosition+1}
            

    }, 3000);

    return () => clearInterval(intervalRef.current);
    
  }, [numSlides]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-content"
        style={{
          transform: `translateX(-${position * (100 / numSlides)}%)`,
          width: `${numSlides * 100}%`,
        }}
      >
        <div className="carousel-slide "><p>Somos lideres en el mercado de la informática y la tecnología a nivel local y regional.</p>  </div>
        <div className="carousel-slide "><p>Nos consolidamos como una empresa especializada en proporcionar asesoría y soporte tecnológico de calidad a las personas y empresas.</p></div>
        <div className="carousel-slide "> <p>Diseñamos, construimos y desarrollamos páginas web y estrategias digitales para nuestros clientes siguiendo altos estándares de calidad y estilo.</p></div>
     
      </div>
    </div>
  );
}

export default CarouselTexto;