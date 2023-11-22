import './CatalogPage.css';
import { useState, useEffect } from 'react';
import { toDollars } from '../../to-dollars.tsx';
import { useParams } from 'react-router-dom';

type ProductItem = {
  productItemId: number;
  categoryId: number;
  imageUrl: string;
  name: string;
  desc: string;
  price: number;
  producttype: string;
  productItem: string;
  brand: string;
  category: string;
};

async function readProductItems(categoryId): Promise<ProductItem[]> {
  const response = await fetch(`/api/productItems/${categoryId}`);
  const productItems = await response.json();
  return productItems;
}

export default function CatalogPage() {
  const { categoryId } = useParams();
  const [productItem, setProductItem] = useState<ProductItem[]>([]);

  useEffect(() => {
    async function getProductItem() {
      try {
        const productItemData = await readProductItems(categoryId);
        setProductItem(productItemData);
      } catch (error) {
        console.error(error);
      }
    }
    getProductItem();
  }, [categoryId]);

  return (
    <div className="catalog-wrapper">
      <h1 className="category-header w-full text-center mt-2 mb-2 bg-slate-200">
        {productItem[0]?.category}
      </h1>
      <div className="w-screen pb-2 pl-2 grid grid-cols-4 place-items-center bg-orange-100">
        {productItem.map((item) => (
          <div>
            <CatalogCard key={item.productItemId} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CatalogProps = {
  item: ProductItem;
};

export function CatalogCard({ item }: CatalogProps) {
  return (
    <div className="catalog-card-wrapper flex-col mt-2 bg-white">
      <div className="image-div justify-center flex">
        <img className="catalog-img flex" src={`${item.imageUrl}`} />
      </div>
      <div className="catalog-text-div">
        <p className="catalog-brand flex justify-center ">{item.brand}</p>
        <p className="catalog-desc flex justify-center">{item.desc}</p>
        <p className="catalog-price flex justify-center">
          {toDollars(item.price)}
        </p>
      </div>
    </div>
  );
}
