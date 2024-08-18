import { useDispatch, useSelector } from "react-redux";
import MaxWidthContainer from "../components/MaxWidthContainer";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import { SingleProduct, useProductsContext } from "../contexts/productsContext";
import { addToCart } from "../redux/cartSlice";
import OurPerks from "./sections/OurPerks";

export interface RootState {
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

const Shop = () => {
  const { products } = useProductsContext();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  const handleAddToCart = (product: SingleProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <MaxWidthContainer className="my-8 space-y-8">
        <PageHeader title="Shop From Our Curated Collection" />
        <div className="grid grid-cols-1 gap-8 product-listing sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </MaxWidthContainer>
      <OurPerks />
    </>
  );
};

export default Shop;
