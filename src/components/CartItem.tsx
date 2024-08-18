import React from "react";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onQuantityChange,
}) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} />
    <h3>{item.name}</h3>
    <p>${item.price.toFixed(2)}</p>
    <input
      type="number"
      value={item.quantity}
      onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
      min="1"
    />
    <button onClick={() => onRemove(item.id)}>Remove</button>
  </div>
);

export default CartItem;
