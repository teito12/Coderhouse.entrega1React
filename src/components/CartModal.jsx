import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleCheckout = () => {
        console.log('Finalizando la compra...');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded shadow-md w-80">
                <h2 className="text-xl font-semibold">Tu Carrito</h2>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                            <span>{item.name}</span>
                            <button onClick={() => handleRemove(item.id)}>X</button>
                        </li>
                    ))}
                </ul>
                <button 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleCheckout}
                >
                    Finalizar Compra
                </button>
                <button 
                    className="mt-2 text-gray-500"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default CartModal;