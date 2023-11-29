import type { Product } from './Pages/ProductDetail.tsx';
import type { Category } from './Components/Drawer.tsx';
import type { CartProps } from './Pages/ShoppingCart.tsx';
import type { ProductItem } from './Pages/CatalogPage.tsx';

export async function readCategories(): Promise<Category[]> {
  const response = await fetch('/api/categories');
  const categories = await response.json();
  return categories;
}

export async function readProductItems(categoryId): Promise<ProductItem[]> {
  const response = await fetch(`/api/productItems/${categoryId}`);
  const productItems = await response.json();
  return productItems;
}

export async function readCart(): Promise<CartProps[]> {
  const response = await fetch('/api/shoppingCarts');
  const categories = await response.json();
  return categories;
}

export async function fetchProduct(productItemId: number): Promise<Product> {
  const response = await fetch(`/api/detail/${productItemId}`);
  const productItem = await response.json();
  productItem.sizes = JSON.parse(productItem.size);
  productItem.weights = JSON.parse(productItem.weight);
  return productItem;
}

export async function addToCart(
  item: Product,
  quantity: number,
  size: string,
  weight: number
) {
  const response = await fetch(`/api/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      name: item.name,
      desc: item.desc,
      imageUrl: item.imageUrl,
      price: item.price,
      productItemId: item.productItemId,
      weight,
      size,
      quantity,
    }),
  });
  const cartItem = await response.json();
  return cartItem;
}

export async function deleteFromCart(shoppingCartId) {
  const response = await fetch(`/api/cartItem/${shoppingCartId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const cartItem = await response.json();
  return cartItem;
}
