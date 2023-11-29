import './ProductDetail.css';
import { add30 } from '../Components/add30.tsx';
import { PiPlusCircleBold } from 'react-icons/pi';
import { PiMinusCircleBold } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toDollars } from '../Components/to-dollars.tsx';
import { addToCart, fetchProduct } from '../api.ts';

export type Product = {
  productItemId: number;
  name: string;
  imageUrl: string;
  price: number;
  desc: string;
  size: string;
  sizes: string[];
  weight: number;
  weights: number[];
};

export default function ProductDetail() {
  const { productItemId } = useParams();
  const [item, setItem] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function loadProduct(productItemId: number) {
      try {
        const product = await fetchProduct(productItemId);
        setItem(product);
      } catch (error) {
        console.error(error);
      }
    }
    if (productItemId) {
      loadProduct(+productItemId);
    }
  }, [productItemId]);

  async function handleAddToCart() {
    if (!item) {
      return;
    }
    const size = item.sizes[activeIndex];
    const weight = item.weights[activeIndex];
    addToCart(item, quantity, size, weight);
  }

  if (!item) {
    return null;
  }
  return (
    <div className="detail-wrapper w-full justify-center">
      <div className="detail-background flex justify-center w-full h-screen bg-yellow-100">
        <div className="w-11/12 flex my-9 h-11/12 bg-white">
          <div className="image-div flex justify-center items-center w-2/4 h-auto">
            <div className="w-11/12 h-11/12 flex justify-center items-center">
              <img
                className="image w-auto h-auto align-middle"
                src={item.imageUrl}
              />
            </div>
          </div>
          <div className="details-div flex items-center w-2/4 pl-12">
            <div className="text-div w-auto h-auto">
              <h1 className="detail-brand w-fit">{item.name}</h1>
              <p className="detail-desc">{item.desc}</p>
              <div>
                <div className="price-weights-div">
                  <div className="og-price-div flex">
                    <p className="og-price line-through mt-9">
                      {add30(item.price)}
                    </p>
                    <p className="og-price text-slate-600 px-2 bg-red-400 mt-9 ml-2">
                      -30%
                    </p>
                  </div>
                  <p className="detail-price bg-green-300 w-fit px-1 mt-2">
                    {toDollars(item.price)}
                  </p>
                </div>
              </div>
              <div className="flex column-2">
                <div>
                  <div>
                    <div>
                      <p className="detail-select mt-12">Select a Size:</p>
                      <div className="sizes flex mt-2">
                        <SizeButton
                          item={item}
                          activeIndex={activeIndex}
                          onSelect={setActiveIndex}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="detail-quantity mt-5">Quantity:</p>
                      <div className="quantity-div flex mt-2">
                        <div className="plus-button flex justify-center">
                          {quantity > 1 ? (
                            <PiMinusCircleBold
                              className="cursor-pointer"
                              onClick={() => setQuantity(quantity - 1)}
                            />
                          ) : (
                            <PiMinusCircleBold />
                          )}
                        </div>
                        <div className="quantity-shown bg-slate-300 flex justify-center mx-2">
                          <div>{quantity}</div>
                        </div>
                        <div className="minus-button flex justify-center">
                          <PiPlusCircleBold
                            className="cursor-pointer"
                            onClick={() => setQuantity(quantity + 1)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="weight-box flex border border-solid border-black ml-8 mt-10">
                  <div className="weight-text flex flex-col w-full  h-full justify-around py-2 px-3">
                    <div className="flex">
                      <div className="flex-col pr-1">
                        {item.sizes.map((item) => (
                          <p key={item}>{item}:</p>
                        ))}
                      </div>
                      <div className="flex-col pr-2">
                        {item.weights.map((weight) => (
                          <p key={weight}>
                            {Math.floor(Number(weight / 16))} lbs.
                          </p>
                        ))}
                      </div>
                      <div className="flex-col">
                        {item.weights.map((weight) => (
                          <p key={weight}>{Number(weight % 16)} oz.</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-to-cart-div flex justify-center">
                <div className="add-to-cart flex justify-center mt-8 mb-6">
                  <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type SizeButtonProps = {
  item: Product;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function SizeButton({ item, activeIndex, onSelect }: SizeButtonProps) {
  const buttons = item.sizes.map((item, index) => (
    <button
      className={
        activeIndex === index
          ? 'size-select bg-green-500 justify-center mr-4 px-2 w-fit'
          : 'size-select bg-slate-400 justify-center mr-4 px-2 w-fit'
      }
      key={item}
      onClick={() => onSelect(index)}>
      {item}
    </button>
  ));
  return <div>{buttons}</div>;
}
