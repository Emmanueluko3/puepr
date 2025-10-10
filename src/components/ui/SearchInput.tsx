import { Search } from "iconoir-react";
import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  ...rest
}) => {
  return (
    <div {...rest} className="relative w-full max-w-sm">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="w-full bg-grey-50 border border-grey-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-custom"
      />
      <Search className="absolute left-3 top-2.5 text-grey-500" />
    </div>
  );
};
