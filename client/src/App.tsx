import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CatalogPage from './Pages/CatalogPage';
import ProductDetail from './Pages/ProductDetail';
import ShoppingCart from './Pages/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { readCart } from './api.ts';

export default function App() {
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  useEffect(() => {
    async function getCartQuantity() {
      try {
        const cartData = await readCart();
        let totalItems = 0;
        cartData.forEach((item) => {
          totalItems += item.quantity;
        });
        setCartQuantity(totalItems);
      } catch (error) {
        console.error(error);
      }
    }
    getCartQuantity();
  }, []);

  function handleAdd(count) {
    setCartQuantity(cartQuantity + count);
  }

  function handleDeleteCart(count) {
    setCartQuantity(cartQuantity - count);
  }

  function handleUpdate(delta: number) {
    setCartQuantity(cartQuantity + delta);
  }

  return (
    <Routes>
      <Route path="/" element={<Header indicator={cartQuantity} />}>
        <Route index element={<HomePage />} />
        <Route path="/productItem/:categoryId" element={<CatalogPage />} />
        <Route
          path="/detail/:productItemId"
          element={<ProductDetail onAdd={handleAdd} />}
        />
        <Route
          path="/cart/:shoppingCartId"
          element={
            <ShoppingCart onRemove={handleDeleteCart} onUpdate={handleUpdate} />
          }
        />
      </Route>
    </Routes>
  );
}
