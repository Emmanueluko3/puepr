import Image from "next/image";
import React from "react";

interface BlogCardProps extends React.HTMLAttributes<HTMLElement> {
  image: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  text: string;
}
export default function BlogCard({
  image,
  title,
  category,
  date,
  readTime,
  text,
  ...rest
}: BlogCardProps) {
  return (
    <article
      {...rest}
      className="bg-gray-50 rounded-2xl overflow-hidden h-full"
    >
      <div className="h-60 bg-gray-200 relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="360px"
        />
      </div>

      <div className="p-4 h-full">
        <div className="mb-4">
          <span className="inline-block px-2.5 py-0.5 bg-pink-100 text-pink-600 text-xs font-medium rounded font-clash">
            {category}
          </span>
        </div>

        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3 font-clash">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-base font-medium text-black mb-2 leading-tight font-clash">
          {title}
        </h3>

        <p className="text-grey-600 text-base leading-relaxed line-clamp-2 font-clash">
          {text}
        </p>
      </div>
    </article>
  );
}
