import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Product as ProductTypes } from "./types/Product";
import { BaseURL } from "./utils/BaseURL";
// Custom Components
import NotFoundProduct from "./components/NotFoundProduct";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Avatar from "./components/Avatar";
// -------------------------------------------------------

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetching Data
  const getProducts = async () => {
    try {
      const res = await axios.get(`${BaseURL}/products`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };
  // End Here

  useEffect(() => {
    getProducts();
    console.log("products", products);
  }, []);

  // Filter projects based on search input
  const filteredProducts = products.filter((product: ProductTypes) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // End Here

  return (
    <main className="min-h-screen p-8 w-full bg-slate-900 text-white">
      <Toaster />
      <div className="container mx-auto flex flex-col gap-10">
        <h1 className="text-5xl font-bold text-center">Product List</h1>
        <SearchBar
          onChange={(ev: ChangeEvent<HTMLSelectElement>) =>
            setSearchQuery(ev.target.value)
          }
          value={searchQuery}
        />
        {filteredProducts.length === 0 ? (
          <NotFoundProduct searchQuery={searchQuery} />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
      <Avatar />
    </main>
  );
};

export default App;
