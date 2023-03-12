
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Acerca_de from './components/Acerca_de'
import Carrusel from './components/Carrusel'
import Navegacion from './components/Navegacion'
import ProgresoCircular from './components/ProgresoCircular'
import Servicios from './components/Servicios'



function App() {
  

  return (
    <div className="App">
        
      <HashRouter>
        <Navegacion/>
        <Carrusel/>
        <Acerca_de/>
        <Servicios/>
        <ProgresoCircular/>
        <Routes>
          <Route/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
