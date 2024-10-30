import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = ({ onClick }) => {
    const { cart } = useContext(CartContext);

    return (
        <div onClick={onClick} className="cursor-pointer relative">
            <span className="material-icons text-white">shopping_cart</span>
            {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white text-xs px-2">
                    {cart.length}
                </span>
            )}
        </div>
    );
};

export default CartWidget;