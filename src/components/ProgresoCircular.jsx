
import React, { useState, useEffect } from 'react';

function ProgresoCircular() {
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 80) {
          clearInterval(intervalId);
          return 80;
        }
        return prevProgress + 10;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
/**progreso 1*/
useEffect(() => {
  const intervalId = setInterval(() => {
    setProgress1((prevProgress) => {
      if (prevProgress >= 70) {
        clearInterval(intervalId);
        return 70;
      }
      return prevProgress + 10;
    });
  }, 1000);
  return () => clearInterval(intervalId);
}, []);

/**progreso 2 */
useEffect(() => {
  const intervalId = setInterval(() => {
    setProgress2((prevProgress) => {
      if (prevProgress >= 39) {
        clearInterval(intervalId);
        return 39;
      }
      return prevProgress + 10;
    });
  }, 1000);
  return () => clearInterval(intervalId);
}, []);




  return (
    <div className='containerFather'> 
    <div className="circular-progress-container">

      <div className="circular-progress">
        <div className="circular-progress-fill" style={{ transform: `rotate(${(progress2 / 100) * 360}deg)` }}></div>
        <div className="circular-progress-mask"></div>
        <div className="circular-progress-text">{progress2}%</div>
      </div>

    </div>

      <div className="circular-progress-container">

      <div className="circular-progress">
        <div className="circular-progress-fill" style={{ transform: `rotate(${(progress1 / 100) * 360}deg)` }}></div>
        <div className="circular-progress-mask"></div>
        <div className="circular-progress-text">{progress1}%</div>
      </div>

    </div>

    <div className="circular-progress-container">

<div className="circular-progress">
  <div className="circular-progress-fill" style={{ transform: `rotate(${(progress / 100) * 360}deg)` }}></div>
  <div className="circular-progress-mask"></div>
  <div className="circular-progress-text">{progress}%</div>
</div>

</div>
    </div>
  );
}

  export default ProgresoCircular;