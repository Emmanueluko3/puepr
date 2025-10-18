"use client";

import { TextareaHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { useField } from "formik";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  icon?: ReactNode;
  label?: string;
  parentClassName?: string;
  name: string;
};

export default function Textarea({
  icon,
  label,
  className,
  parentClassName,
  name,
  ...props
}: TextareaProps) {
  const [field, meta] = useField(name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <div>
      {label && (
        <label htmlFor={name} className="text-lg font-medium font-clash">
          {label}
        </label>
      )}

      <div
        className={clsx(
          `flex items-start border rounded-lg px-4 py-3 bg-white w-full placeholder:font-clash font-clash placeholder:text-sm ${
            label && "mt-3"
          }`,
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 focus-within:ring-primary-500",
          parentClassName
        )}
      >
        {icon && <span className="text-gray-400 mr-2 pt-1">{icon}</span>}
        <textarea
          id={name}
          {...field}
          {...props}
          rows={props.rows || 4}
          className={clsx(
            "w-full outline-none bg-transparent text-sm font-clash resize-none",
            className
          )}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-500 font-clash">{error}</p>}
    </div>
  );
}
