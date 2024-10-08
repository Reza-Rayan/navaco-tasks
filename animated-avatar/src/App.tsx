import { Toaster } from "react-hot-toast";
import Avatar from "./components/Avatar";

const App = () => {
  return (
    <>
      <Toaster />
      <div className="relative h-screen w-full bg-slate-900 flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-xl lg:text-4xl">
          Avatar Animation
        </h1>
        <Avatar />
      </div>
    </>
  );
};

export default App;
