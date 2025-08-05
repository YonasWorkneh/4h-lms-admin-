"use client";
import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  placeholder: string;
  showIcon?: boolean;
  onSearch: () => void;
}

export default function SearchBar({
  placeholder,
  showIcon,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex-1 max-w-xl">
      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
        />
        {showIcon && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded">
            ⌘F
          </span>
        )}
      </form>
    </div>
  );
}
