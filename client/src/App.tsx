import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CatalogPage from './Pages/CatalogPage';
// import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <CatalogPage />
    </div>
  );
}
