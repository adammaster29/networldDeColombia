import React from 'react';

const Navegacion = () => {
    return (
      <nav>
      <div class="logo"><p className='textoNav'><span className='notranslate span-N'>N</span>etworld de Colombia S.A.S</p></div>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">&#9776;</label>
      <ul class="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#acerca">Acerca De Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#equipo">Equipo</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contactos">Contacto</a></li>
        <li>
          <a href="#">Empresa</a>
          <ul class="submenu">
            <li><a href="#"> Objetivos</a></li>
            <li><a href="#">Mision</a></li>
            <li><a href="#">Vision 3</a></li>
          </ul>
        </li>
        
      </ul>
    </nav>

    );
};

export default Navegacion;