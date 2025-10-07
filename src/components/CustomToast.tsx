import { ReactNode } from "react";

interface CustomToastProps {
  title: string;
  message: string;
  icon?: ReactNode;
}

export function CustomToast({ title, message, icon }: CustomToastProps) {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-2xl pointer-events-auto flex p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-[#CED8E6] flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-lg font-medium text-gray-900 font-clash">
            {title}
          </p>
          <p className="mt-1 text-base text-gray-500 font-clash">{message}</p>
        </div>
      </div>
    </div>
  );
}
