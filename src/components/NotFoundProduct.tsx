import Spinner from "./Spinner";

interface NotFoundProduct {
  searchQuery: string;
  loading: boolean;
}

const NotFoundProduct = ({ searchQuery, loading }: NotFoundProduct) => {
  return (
    <div className="w-full h-24 flex flex-col items-center justify-center">
      {loading ? (
        <Spinner />
      ) : (
        <h2 className="text-slate-400 text-2xl">Not Found "{searchQuery}"</h2>
      )}
    </div>
  );
};

export default NotFoundProduct;
