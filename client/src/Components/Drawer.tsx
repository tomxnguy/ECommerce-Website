import { useState, useEffect } from 'react';
import './Drawer.css';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { readCategories } from '../api.ts';

export type Category = {
  categoryId: number;
  name: string;
};

export default function Drawer() {
  const [openMenu, setOpenMenu] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const cats = await readCategories();
        setCategories(cats);
      } catch (error) {
        console.error(error);
      }
    }
    getCategories();
  }, []);

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
        {categories.map((item) => (
          <div onClick={closeDrawer}>
            <Link to={`/productItem/${item.categoryId}`}>
              <MenuItem key={item.categoryId} item={item} />
            </Link>
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
  item: Category;
};

function MenuItem({ item }: MenuDrawerProps) {
  return (
    <div className="menu-item-div">
      <div className="menu-item">{item.name}</div>
    </div>
  );
}
