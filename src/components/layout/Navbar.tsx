"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-[96px] shadow-md z-50 navbar-override">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white no-underline">
            博客图标
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 font-medium no-underline hover:text-gray-900 dark:hover:text-white">
            首页
          </Link>
          <Link href="/posts" className="text-gray-700 dark:text-gray-300 font-medium no-underline hover:text-gray-900 dark:hover:text-white">
            文章
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 font-medium no-underline hover:text-gray-900 dark:hover:text-white">
            关于
          </Link>
        </div>
      </div>
    </div>
  );
}