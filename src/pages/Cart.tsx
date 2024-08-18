import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

interface RootState {
  cart: {
    items: {
      id: number;
      name: string;
      price: number;
      image: string;
      quantity: number;
    }[];
  };
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      ))}
      <h2>Total: ${calculateTotal()}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
