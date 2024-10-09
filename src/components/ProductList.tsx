import { Product as ProductTypes } from "../types/Product";
// Custom Component
import Product from "./Product";
// --------------------------------------------------------

interface ProductList {
  products: ProductTypes[];
}

const ProductList = ({ products }: ProductList) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {products.map((product: ProductTypes) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
