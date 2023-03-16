
import { useEffect, useState } from 'react'
import './App.css'
import Acerca_de from './components/Acerca_de'
import BeneficioDeCliente from './components/BeneficioDeCliente'
import CarouselTexto from './components/CarouselTexto'
import Carrusel from './components/Carrusel'
import DescripcionServicios from './components/DescripcionServicios'
import Equipo from './components/Equipo'
import Navegacion from './components/Navegacion'
import PorqueElegirnos from './components/PorqueElegirnos'
import Portafolio from './components/Portafolio'
import ProgresoCircular from './components/ProgresoCircular'
import Servicios from './components/Servicios'
import Subscribete from './components/Subscribete'



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000); // Simulación de carga
  }, []);
  

  return (
    <>
      {isLoading ? (

       <div className='containerLoader'> <div className="loader"></div></div>
      ) : (
    <div  className='App' >
        <Navegacion/>
        <Carrusel/>
        <Acerca_de/>
        <Servicios/>
        <ProgresoCircular/>
        <PorqueElegirnos/>
        <Subscribete/>
        <Equipo/>
      <Portafolio/>
      <DescripcionServicios/>
      <CarouselTexto/>
      <BeneficioDeCliente/>
    
    </div>
    )}
    </>
  )
}

export default App
