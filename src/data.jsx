export const getProducts = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '1', name: 'Producto 1', description: 'Descripción del Producto 1', price: 100, image: 'https://via.placeholder.com/150' },
          { id: '2', name: 'Producto 2', description: 'Descripción del Producto 2', price: 150, image: 'https://via.placeholder.com/150' },
          { id: '3', name: 'Producto 3', description: 'Descripción del Producto 3', price: 200, image: 'https://via.placeholder.com/150' },
        ]);
      }, 1000);
    });
  };
  
  export const getProductById = async (id) => {
    const products = await getProducts();
    return products.find((product) => product.id === id);
  };