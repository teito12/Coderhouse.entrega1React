import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import NotFound from './pages/NotFound';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <CartProvider>
            <Router>
                <NavBar onCartClick={toggleModal} />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <CartModal isOpen={isModalOpen} onClose={toggleModal} />
            </Router>
        </CartProvider>
    );
};

export default App;