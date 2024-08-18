import { IconTrash } from "@tabler/icons-react";
import React from "react";
import { SingleProduct } from "../contexts/productsContext";
import { formatCurrency } from "../lib/utils";
import Image from "./Image";
import QuantityInput from "./QuantityInput";

interface CartItemProps {
  item: SingleProduct & {
    quantity: number;
  };
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center p-2 border rounded-md shadow-md gap-x-4 gap-x-2">
      <Image
        src={item.image}
        alt={item.title}
        className="w-24 p-2 rounded-md aspect-square"
      />
      <div className="space-y-1">
        <h3 className="font-bold line-clamp-1">{item.title}</h3>
        <p>{formatCurrency({ amount: +item.price })}</p>
        <div className="flex items-center space-x-2">
          <QuantityInput
            min={1}
            max={10}
            initial={item.quantity}
            onChange={(newQuantity) => onQuantityChange(item.id, newQuantity)}
          />
          <button
            onClick={() => onRemove(item.id)}
            className="flex items-center justify-center p-2 transition-all duration-200 rounded-md bg-gray-200/50 hover:bg-red-200/50 size-8"
          >
            <IconTrash className="size-5 text-rose-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
