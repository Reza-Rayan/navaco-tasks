import { useEffect, useRef } from "react";
import { SearchBarProps } from "../types/SearchBar";
// Custom Components
import Spinner from "./Spinner";
// --------------------------------------------------

const SearchBar = ({ value, onChange, loading }: SearchBarProps) => {
  // Create a ref to the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus on input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="bg-transparent rounded-xl border border-slate-400 px-4 py-4 w-full focus:border-indigo-700"
        placeholder="type product name ..."
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      {loading && (
        <div className="absolute right-3 top-3">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
