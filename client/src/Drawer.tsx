import { useState } from 'react';
import './Drawer.css';
import { IoMenu } from 'react-icons/io5';

type Props = {
  drawerItems: string[];
};

export default function Drawer({ drawerItems }: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  function openDrawer() {
    setOpenMenu(!openMenu);
  }

  function closeDrawer() {
    setOpenMenu(false);
  }

  return (
    <div className="wrapper">
      <div className="menu-icon">
        <IoMenu onClick={openDrawer} className={openMenu} />
      </div>
      <div className={openMenu ? 'menu-drawer is-open' : 'menu-drawer'}>
        <div>
          <h2 className="menu-heading">Shop</h2>
        </div>
        {drawerItems.map((item) => (
          <div onClick={closeDrawer}>
            <MenuDrawer item={item} />
          </div>
        ))}
      </div>
      <div
        onClick={closeDrawer}
        className={openMenu ? 'menu-shade is-drawn' : 'menu-shade'}></div>
    </div>
  );
}

type MenuDrawerProps = {
  item: string;
};

function MenuDrawer({ item }: MenuDrawerProps) {
  return (
    <div className="menu-item-div">
      <div className="menu-item">{item}</div>
    </div>
  );
}
