import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

const Category = () => {
  const { categoryId } = useParams();
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold">Categoría: {categoryId}</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
};

export default Category;