import { SearchBarProps } from "../types/SearchBar";
// --------------------------------------------------

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <>
      <input
        type="text"
        className="bg-transparent rounded-xl border border-slate-400 px-4 py-4 w-full focus:border-indigo-500"
        placeholder="type product name ..."
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default SearchBar;
