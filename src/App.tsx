import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import useDebounce from "./hooks/useDebounce";
import { Product as ProductTypes } from "./types/Product";
import { BaseURL } from "./utils/BaseURL";
// Custom Components
import Title from "./components/Title";
import Avatar from "./components/Avatar";
import NotFoundProduct from "./components/NotFoundProduct";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
// -------------------------------------------------------

const App = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Use debounce hook with a 1-second delay
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  // Fetching Data
  const getProducts = async () => {
    try {
      const res = await axios.get(`${BaseURL}/products`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (searchQuery !== debouncedSearchQuery) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [searchQuery, debouncedSearchQuery]);

  // Filter products based on the debounced search input
  const filteredProducts = products.filter((product: ProductTypes) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen p-8 w-full bg-slate-900 text-white">
      <Toaster />
      <div className="container mx-auto flex flex-col gap-10">
        <Title>Product List</Title>
        <SearchBar
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(ev.target.value)
          }
          value={searchQuery}
          loading={loading}
        />
        {filteredProducts.length === 0 ? (
          <NotFoundProduct
            searchQuery={debouncedSearchQuery}
            loading={loading}
          />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
      <Avatar />
    </main>
  );
};

export default App;
