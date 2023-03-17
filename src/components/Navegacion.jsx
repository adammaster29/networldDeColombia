import React from 'react';

const Navegacion = () => {
    return (
<nav>
  <ul className='navegador'>
    <p className='textoNav'><span className='span-N'>N</span>etworld de Colombia S.A.S</p>
    <li><a style={{color:"white"}} href="#">Inicio</a></li>
    <li><a style={{color:"white"}} href="#acerca">Acerca de Nosotros</a></li>
    <li><a style={{color:"white"}} href="#servicios">Servicios</a></li>
    <li><a style={{color:"white"}} href="#equipo">Equipo</a></li>
    <li><a style={{color:"white"}} href="#portafolio">Portafolio</a></li>
    <li><a style={{color:"white"}} href="#cliente">Blog</a></li>
    <li><a style={{color:"white"}} href="#contactos">Contactos</a></li>
    <li><a style={{color:"white"}} >Empresa</a>
    
      <ul className='ulObject'>
        <li><a href="#">Objectivos</a></li>
        <li><a href="#">Mision 2</a></li>
        <li><a href="#">Vision</a></li>
      </ul>
    </li>
    
  </ul>
</nav>

    );
};

export default Navegacion;