"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import clsx from "clsx";
import { useField } from "formik";

type SelectOption = {
  value: string;
  title: string;
  text?: string;
  disabled?: boolean;
  children?: { value: string; title: string }[];
};

type SelectProps = {
  icon?: ReactNode;
  label?: string;
  parentClassName?: string;
  className?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  disabled?: boolean;
  returnValue?: "value" | "label";
};

export default function Select({
  icon,
  label,
  className,
  parentClassName,
  options,
  placeholder,
  value,
  onChange,
  name,
  disabled,
  returnValue = "value",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openChild, setOpenChild] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [field, meta, helpers] = useField(name);
  const error = meta.touched ? meta.error : undefined;

  const effectiveValue = value !== undefined ? value : field.value;

  // 🔥 Find selected parent OR child
  const selectedOption =
    options
      .flatMap((option) => [
        option,
        ...(option.children?.map((c) => ({ ...c, parent: option })) || []),
      ])
      .find(
        (opt: any) =>
          opt[returnValue === "label" ? "title" : "value"] === effectiveValue
      ) || null;

  const listboxId = `${name}-listbox`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setOpenChild(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleParentClick = (option: SelectOption) => {
    if (option.disabled) return;

    // If parent has children, toggle child dropdown
    if (option.children && option.children.length > 0) {
      setOpenChild(openChild === option.value ? null : option.value);
      return;
    }

    // If no children → close everything
    setIsOpen(false);

    const returnVal = returnValue === "label" ? option.title : option.value;
    helpers.setValue(returnVal);
    onChange?.(returnVal);
  };

  const handleChildClick = (child: { value: string; title: string }) => {
    helpers.setValue(child.value);
    onChange?.(child.value);

    // Close dropdown + child menu
    setOpenChild(null);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label htmlFor={name} className="text-lg font-medium font-clash">
          {label}
        </label>
      )}

      {/* MAIN SELECT BOX */}
      <div
        className={clsx(
          `flex items-center border rounded-lg px-4 py-3 bg-white w-full ${
            label && "mt-3"
          }`,
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 focus-within:ring-primary-500",
          disabled && "opacity-50 cursor-not-allowed bg-gray-50",
          !disabled && "cursor-pointer",
          parentClassName
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
      >
        {icon && <span className="text-gray-400 mr-2">{icon}</span>}

        <div className={clsx("flex-1 text-sm font-clash", className)}>
          {selectedOption ? (
            <span className="text-gray-900">{selectedOption.title}</span>
          ) : (
            <span className="text-gray-400">
              {placeholder || "Select an option"}
            </span>
          )}
        </div>

        <svg
          className={clsx(
            "w-4 h-4 text-gray-400 ml-2 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* DROPDOWN LIST */}
      {isOpen && (
        <div
          id={listboxId}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
          role="listbox"
        >
          {options.map((option) => (
            <div key={option.value}>
              {/* PARENT ITEM */}
              <div
                className={clsx(
                  "px-4 py-3 cursor-pointer transition-colors duration-150",
                  option.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-900 hover:bg-gray-50",
                  effectiveValue === option.value &&
                    "bg-primary-50 text-primary-700"
                )}
                onClick={() => handleParentClick(option)}
              >
                <div className="font-clash font-medium text-sm flex justify-between items-center">
                  {option.title}

                  {/* 🔽 Only show caret if children exist */}
                  {option.children && option.children.length > 0 && (
                    <svg
                      className={clsx(
                        "w-4 h-4 text-gray-400 transition-transform",
                        openChild === option.value && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>

                {option.text && (
                  <div className="font-clash text-xs text-gray-600 mt-1">
                    {option.text}
                  </div>
                )}
              </div>

              {/* 🔥 CHILD DROPDOWN (only visible when parent is open) */}
              {openChild === option.value && option.children && (
                <div className="ml-4 border-l border-gray-200">
                  {option.children.map((child) => (
                    <div
                      key={child.value}
                      className={clsx(
                        "px-4 py-3 cursor-pointer text-sm font-clash transition-colors duration-150",
                        effectiveValue === child.value
                          ? "bg-primary-50 text-primary-700"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChildClick(child);
                      }}
                    >
                      {child.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {error && <p className="mt-1 text-xs text-red-500 font-clash">{error}</p>}
    </div>
  );
}
