import React from 'react';

const Navegacion = () => {
    return (
      <nav>
      <div class="logo"><p className='textoNav'><span className='span-N'>N</span>etworld de Colombia S.A.S</p></div>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">&#9776;</label>
      <ul class="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Contacto</a></li>
        <li>
          <a href="#">Productos</a>
          <ul class="submenu">
            <li><a href="#">Producto 1</a></li>
            <li><a href="#">Producto 2</a></li>
            <li><a href="#">Producto 3</a></li>
          </ul>
        </li>
        
      </ul>
    </nav>

    );
};

export default Navegacion;