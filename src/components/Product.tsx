import { Product as ProductType } from "../types/Product";
// Custom Components
import Modal from "./Modal";
// -------------------------------------------------------

const Product = (product: ProductType) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:shadow-slate-700 transition-all">
      <img
        src={product.image}
        alt={product.title}
        width={300}
        height={400}
        className="w-full h-[300px] rounded-xl"
      />
      <div className="p-5 flex flex-col justify-between">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {product.title}
        </h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>
        <div>
          <Modal
            title={product.title}
            description={product.description}
            image={product.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
