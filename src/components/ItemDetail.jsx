import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data';
import { useCart } from '../context/CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} ha sido agregado al carrito!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mb-4 w-1/2" />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-900 font-bold text-xl mb-4">${product.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;