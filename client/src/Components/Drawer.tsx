import { useState, useEffect } from 'react';
import './Drawer.css';
import { IoMenu } from 'react-icons/io5';

type Category = {
  categoryId: number;
  name: string;
};

async function readCategories(): Promise<Category[]> {
  const response = await fetch('/api/categories');
  const categories = await response.json();
  return categories;
}

export default function Drawer() {
  const [openMenu, setOpenMenu] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const entries = await readCategories();
        setCategories(entries);
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
            <MenuItem key={item.categoryId} item={item} />
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
