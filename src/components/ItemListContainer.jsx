import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../data';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Productos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;