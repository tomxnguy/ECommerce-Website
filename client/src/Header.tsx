import { IoPersonOutline } from 'react-icons/io5';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import './Header.css';
import Drawer from './Drawer';

export default function Header() {
  const drawerItems = ['About', 'Get Started', 'Sign In'];

  return (
    <div>
      <div className="header-wrapper shadow-2xl  w-full top-0 flex bg-yellow-100 justify-between">
        <Drawer drawerItems={drawerItems} />
        <div className="logo-div">
          <img className="logo" src="./public/logo.png" />
        </div>
        <div className="right-hand-buttons flex">
          <div className="sign-in-div flex mr-8">
            <IoPersonOutline className="person-icon flex mr-2 my-8" />
            <a className="sign-in-text flex my-7">Sign In</a>
          </div>
          <div className="cart-div flex mr-10">
            <HiOutlineShoppingCart className="cart-icon flex mr-2 my-8" />
            <a className="cart-text flex my-7">Cart</a>
          </div>
        </div>
      </div>
      <div className="ad-div flex justify-center w-full">
        <a className="ad">New members can save up to 30% off. Shop now.</a>
      </div>
    </div>
  );
}
