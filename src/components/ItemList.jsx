import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <Link to={`/item/${product.id}`}>
            <img src={product.image} alt={product.name} className="h-32 w-full object-cover mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-900 font-bold">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;