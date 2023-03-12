import React from 'react';

const Navegacion = () => {
    return (

    <ul className='navegador'>
    <li><a href="">Inicio</a></li>
    <li><a href="">Acerca De Nosotros</a></li>
    <li><a href="">Servicios</a></li>
    <li><a href="">Equipo</a></li>
    <li><a href="">Portafolio</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Contacto</a></li>
    <li><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Empresa
    </a>
      <ul>
        <li><a href="">Objetivos</a></li>
        <li><a href="">Mision</a></li>
        <li><a href="">Vision</a></li>
      </ul>
    </li>

  </ul>

    );
};

export default Navegacion;