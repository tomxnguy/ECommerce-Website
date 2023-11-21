import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CatalogPage from './Pages/CatalogPage';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="productItem/:categoryId" element={<CatalogPage />} />
      </Route>
    </Routes>
  );
}
