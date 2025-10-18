import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-sm flex items-center font-medium font-clash gap-4 mr-8 cursor-pointer"
      >
        <ChevronLeft /> Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded cursor-pointer ${
            page === currentPage
              ? "bg-primary-custom text-white"
              : "bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-sm flex items-center font-medium font-clash gap-4 ml-8 cursor-pointer"
      >
        Next <ChevronRight />
      </button>
    </div>
  );
};
