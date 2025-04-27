import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  // TODO : Search functionality
  return (
    <form className="max-w-[600px] flex w-full ">
      <div className="w-full relative flex ">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500  transition-all  "
        />
        <button
          type="submit"
          className="px-5 py-2.5 border border-l-0 bg-gray-100 rounded-r-full"
        >
          <SearchIcon className="size-5" />
        </button>
      </div>
    </form>
  );
};
