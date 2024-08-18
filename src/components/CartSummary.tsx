/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Divider from "../components/Divider";
import { formatCurrency } from "../lib/utils";
import { RootState } from "../pages/Shop";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartSummary = () => {
  const cartItems: any = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
  };

  return cartItems.length > 0 ? (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <div className="flex-1 h-full space-y-4 overflow-y-scroll">
        {cartItems.map((item: any) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div>
        <Divider />
        <div className="flex items-center text-lg font-semibold">
          <span className="flex-1">Total:</span>
          <span className="font-bold">
            {formatCurrency({ amount: calculateTotal() })}
          </span>
        </div>
      </div>
      <div>
        <Button className="w-full mt-4">Checkout</Button>
      </div>
    </div>
  ) : (
    <p className="text-lg font-semibold text-center">Your cart is empty</p>
  );
};

export default CartSummary;
