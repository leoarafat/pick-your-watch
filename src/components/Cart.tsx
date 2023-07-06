import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import {
  HiMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from 'react-icons/hi';
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from '@/redux/features/cart/cartSlice';

export default function Cart() {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const total = products.length;
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <HiOutlineShoppingCart size="25" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto relative">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <h1>Total: {total.toFixed(2)}</h1>
        </SheetHeader>
        <div className="cart-items">
          {products.map((product) => (
            <div className="cart-item" key={product.name}>
              <div className="image-container">
                <img src={product?.image} alt="" className="product-image" />
              </div>
              <div className="product-details">
                <h1 className="product-name">{product?.name}</h1>
                <div className="price-quantity-container">
                  <p className="product-quantity">
                    Quantity: {product.quantity}
                  </p>
                  <p className="product-price">
                    Total Price:{' '}
                    {(product.price * product.quantity!).toFixed(2)} $
                  </p>
                </div>
              </div>
              <div className="button-container">
                <div className="quantity-buttons">
                  <Button onClick={() => dispatch(addToCart(product))}>
                    <HiOutlinePlus size="20" />
                  </Button>
                  <Button onClick={() => dispatch(removeOneFromCart(product))}>
                    <HiMinus size="20" />
                  </Button>
                </div>
                <Button
                  variant="destructive"
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  <HiOutlineTrash size="20" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
