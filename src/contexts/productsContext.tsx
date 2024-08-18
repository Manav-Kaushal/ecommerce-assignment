import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../lib/services/api";

export type SingleProduct = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

const ProductsContext = React.createContext<{
  fetching: boolean;
  products: SingleProduct[];
  setProducts: Dispatch<SetStateAction<SingleProduct[]>>;
}>({
  fetching: false,
  products: [],
  setProducts: () => {},
});

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [products, setProducts] = useState<SingleProduct[]>([]);

  const fetchProducts = async () => {
    setFetching(true);
    try {
      const res = await api.get("/products");
      if (res.status <= 301) {
        setProducts(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        fetching,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const data = React.useContext(ProductsContext);
  return { ...data };
};

export default ProductsProvider;
