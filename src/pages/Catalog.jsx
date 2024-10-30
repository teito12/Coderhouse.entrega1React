import ItemListContainer from '../components/ItemListContainer';

const Catalog = () => {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold">Catálogo de Productos</h1>
      <ItemListContainer />
    </div>
  );
};

export default Catalog;