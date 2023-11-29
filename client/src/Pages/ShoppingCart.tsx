import { PiPlusCircleBold } from 'react-icons/pi';
import { PiMinusCircleBold } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import './ShoppingCart.css';
import { readCart, deleteFromCart } from '../api.ts';
import { toDollars } from '../Components/to-dollars.tsx';

export type CartProps = {
  shoppingCartId: number;
  productItemId: number;
  name: string;
  imageUrl: string;
  price: number;
  desc: string;
  size: string;
  weight: number;
  quantity: number;
};

export default function ShoppingCart() {
  const [cartItem, setCartItem] = useState<CartProps[]>([]);

  useEffect(() => {
    async function getCartItem() {
      try {
        const shoppingCartData = await readCart();
        setCartItem(shoppingCartData);
      } catch (error) {
        console.error(error);
      }
    }
    getCartItem();
  }, []);

  let totalItems = 0;
  let totalWeight = 0;
  let subTotal = 0;

  cartItem.forEach((item) => {
    totalItems += item.quantity;
    totalWeight += Number(item.weight);
    subTotal += item.price;
  });

  function handleUpdateDelete(item: CartProps) {
    const updatedCart = cartItem.filter((c) =>
      c.shoppingCartId === item.shoppingCartId ? false : true
    );
    setCartItem(updatedCart);
  }

  console.log('cartItem', cartItem);

  return (
    <div className="flex m-2 justify-center">
      <div className="w-11/12 h-auto flex columns-2 border-solid border-2 border-black">
        <div className="cart-items w-full h-max pl-7 pt-4">
          <div className="max-h-full">
            {cartItem.length === 0 ? (
              <div className="empty-message-div flex h-11/12 justify-center">
                <div className="empty-message">Your cart is empty !</div>
              </div>
            ) : (
              cartItem.map((item) => (
                <ItemCard
                  onDelete={handleUpdateDelete}
                  key={item.shoppingCartId}
                  item={item}
                />
              ))
            )}
          </div>
        </div>
        <div className="total-calc w-1/2 h-96 m-2 border-solid border-2 border-black">
          <div className="m-2">
            <p className="flex justify-center">Order Summary</p>
            <p className="mt-7">Total Items: {totalItems}</p>
            <p>
              Total Weight: {Math.floor(Number(totalWeight / 16))} lbs. {''}
              {Number(totalWeight % 16)} oz.
            </p>
            <p className="mt-6">Subtotal: {toDollars(subTotal)}</p>
            <p>Tax: {toDollars(subTotal * 0.09)}</p>
            <p className="mt-6">Order Total: {toDollars(subTotal * 1.09)}</p>
            <div className="checkout-div mt-2 flex justify-center">
              <div className="checkout-button flex justify-center mt-8 mb-6">
                <button>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type CartCardProps = {
  item: CartProps;
  onDelete: (item: CartProps) => void;
};

function ItemCard({ item, onDelete }: CartCardProps) {
  const [itemQuantity, setItemQuantity] = useState(Number(item.quantity));

  async function handleDelete() {
    try {
      await deleteFromCart(item.shoppingCartId);
      onDelete(item);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex m-2 my-6">
      <div className="image-div justify-center items-center w-2/4 h-auto">
        <div className="w-11/12 h-11/12 flex justify-center items-center">
          <img
            className="image w-5/6 h-auto align-middle"
            src={`${item.imageUrl}`}
          />
        </div>
      </div>
      <div className="cart-details-div flex-col">
        <h3 className="cart-brand">{item.name}</h3>
        <p className="cart-desc">{item.desc}</p>
        <p className="cart-price">{toDollars(item.price)}</p>
        <p className="cart-size">Size: {item.size}</p>
        <p>
          Weight: {Math.floor(Number(item.weight / 16))} lbs. {''}
          {Number(item.weight % 16)} oz.
        </p>
        <p className="mt-4">Quantity: </p>
        <div className="quantity-div mt-2 flex">
          <div className="plus-button flex justify-center">
            {itemQuantity > 1 ? (
              <PiMinusCircleBold
                className="cursor-pointer"
                onClick={() => setItemQuantity(itemQuantity - 1)}
              />
            ) : (
              <PiMinusCircleBold />
            )}
          </div>
          <div className="quantity-shown bg-slate-300 flex justify-center mx-2">
            <div>{itemQuantity}</div>
          </div>
          <div className="minus-button flex justify-center">
            <PiPlusCircleBold
              className="cursor-pointer"
              onClick={() => setItemQuantity(itemQuantity + 1)}
            />
          </div>
        </div>
        <div className="remove-item flex justify-center mt-6 mb-6">
          <button onClick={handleDelete}>Remove from Cart</button>
        </div>
      </div>
    </div>
  );
}
