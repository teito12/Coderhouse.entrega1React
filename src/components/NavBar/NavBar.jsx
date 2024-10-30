import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({ onCartClick }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Mi Tienda</h1>
        <div className="flex items-center">
          <CartWidget onClick={onCartClick} />
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-400">Inicio</a></li>
            <li><a href="/category/1" className="text-white hover:text-gray-400">Categoría 1</a></li>
            <li><a href="/category/2" className="text-white hover:text-gray-400">Categoría 2</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;