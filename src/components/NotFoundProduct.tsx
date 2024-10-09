interface NotFoundProduct {
  searchQuery: string;
}

const NotFoundProduct = ({ searchQuery }: NotFoundProduct) => {
  return (
    <div className="w-full h-24 flex flex-col items-center justify-center">
      <h2 className="text-slate-400 text-2xl">Not Found The "{searchQuery}"</h2>
    </div>
  );
};

export default NotFoundProduct;
