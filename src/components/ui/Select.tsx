"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import clsx from "clsx";
import { useField } from "formik";

type SelectOption = {
  value: string;
  title: string;
  text?: string;
  disabled?: boolean;
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [field, meta, helpers] = useField(name);
  const error = meta.touched ? meta.error : undefined;

  const effectiveValue = value !== undefined ? value : field.value;
  const selectedOption =
    options.find(
      (opt) =>
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
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option: SelectOption) => {
    if (option.disabled) return;
    setIsOpen(false);

    const returnVal = returnValue === "label" ? option.title : option.value;

    onChange?.(returnVal);
    helpers.setValue(returnVal);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label htmlFor={name} className="text-lg font-medium font-clash">
          {label}
        </label>
      )}

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

      {isOpen && (
        <div
          id={listboxId}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={clsx(
                "px-4 py-3 cursor-pointer transition-colors duration-150",
                option.disabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-900 hover:bg-gray-50",
                effectiveValue ===
                  (returnValue === "label" ? option.title : option.value) &&
                  "bg-primary-50 text-primary-700"
              )}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={
                effectiveValue ===
                (returnValue === "label" ? option.title : option.value)
              }
            >
              <div className="font-clash font-medium text-sm">
                {option.title}
              </div>
              {option.text && (
                <div className="font-clash text-xs text-gray-600 mt-1">
                  {option.text}
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
