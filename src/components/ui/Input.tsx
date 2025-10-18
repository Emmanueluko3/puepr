"use client";

import { useContext, type InputHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";
import { FormikContext, type FormikContextType } from "formik";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  label?: string;
  parentClassName?: string;
  name: string;
};

export default function Input({
  icon,
  label,
  className,
  parentClassName,
  name,
  id: idProp,
  value: propValue,
  onChange: propOnChange,
  onBlur: propOnBlur,
  ...restProps
}: InputProps) {
  const formik = useContext(FormikContext) as FormikContextType<
    Record<string, unknown>
  > | null;

  const isInsideFormik = !!formik;
  const id = idProp ?? name;

  const meta = isInsideFormik ? formik!.getFieldMeta(name) : undefined;
  const error =
    meta?.touched && typeof meta.error === "string" ? meta.error : undefined;

  const formikField = isInsideFormik ? formik!.getFieldProps(name) : null;

  const wiredValue = isInsideFormik ? formikField!.value : propValue;
  const wiredOnChange = isInsideFormik ? formikField!.onChange : propOnChange;
  const wiredOnBlur = isInsideFormik ? formikField!.onBlur : propOnBlur;

  return (
    <div>
      {label && (
        <label htmlFor={id} className="text-lg font-medium font-clash">
          {label}
        </label>
      )}

      <div
        className={clsx(
          `flex items-center border rounded-lg px-4 py-3 bg-white w-full placeholder:font-clash font-clash placeholder:text-sm ${
            label && "mt-3"
          }`,
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 focus-within:ring-primary-500",
          parentClassName
        )}
      >
        {icon && <span className="text-gray-400 mr-2">{icon}</span>}

        <input
          id={id}
          name={name}
          value={wiredValue as InputProps["value"]}
          onChange={wiredOnChange}
          onBlur={wiredOnBlur}
          {...restProps}
          className={clsx(
            "w-full outline-none bg-transparent text-sm font-clash",
            className
          )}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-500 font-clash">{error}</p>}
    </div>
  );
}
