import { HiOutlineShoppingCart } from 'react-icons/hi2';
import './Header.css';
import Drawer from './Drawer';
import { Outlet, Link } from 'react-router-dom';

type HeaderProps = {
  indicator: number | undefined;
};

export default function Header({ indicator }: HeaderProps) {
  return (
    <div className="sticky top-0">
      <div className="header-wrapper shadow-2xl w-full top-0 flex bg-yellow-100 justify-between">
        <Drawer />
        <div className="flex">
          <Link to="/">
            <img className="logo" src="/images/logo.png" />
          </Link>
        </div>
        <div className="right-hand-buttons flex">
          <Link to={`/cart/:shoppingCartId`}>
            <button className="cart-div flex mr-10">
              <HiOutlineShoppingCart className="cart-icon flex mr-2 my-8" />
              <a className="cart-text flex my-7">Cart</a>
              <div className="rounded-full bg-red-700 absolute translate-x-1 w-7 flex justify-center align-middle mt-4 text-white">
                <p>{indicator}</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-8 bg-red-600  text-center flex justify-center w-full">
        <a className="text-center font-sans: Domine, sans-serif; text-white pt-1 hover:underline cursor-pointer">
          New members can save up to 30% off. Shop now.
        </a>
      </div>
      <Outlet />
    </div>
  );
}
