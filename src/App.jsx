
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Acerca_de from './components/Acerca_de'
import Carrusel from './components/Carrusel'
import Equipo from './components/Equipo'
import Navegacion from './components/Navegacion'
import PorqueElegirnos from './components/PorqueElegirnos'
import ProgresoCircular from './components/ProgresoCircular'
import Servicios from './components/Servicios'
import Subscribete from './components/Subscribete'



function App() {
  

  return (
    <div className="App">
        
      <HashRouter>
        <Navegacion/>
        <Carrusel/>
        <Acerca_de/>
        <Servicios/>
        <ProgresoCircular/>
        <PorqueElegirnos/>
        <Subscribete/>
        <Equipo/>
        <Routes>
          <Route/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
