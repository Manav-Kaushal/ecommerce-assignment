import { toast } from "sonner";
import { SingleProduct } from "../contexts/productsContext";
import { formatCurrency } from "../lib/utils";
import Button from "./Button";
import Image from "./Image";

type Props = {
  product: SingleProduct;
  onAddToCart: (product: SingleProduct) => void;
};

const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <div className="relative overflow-hidden transition-shadow duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full aspect-[1] object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-600">
          {formatCurrency({ amount: +product.price })}
        </p>
        <Button
          size="small"
          variant="secondary"
          onClick={() => {
            onAddToCart(product);
            toast.success("Item added to cart");
          }}
          className="mt-4"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
