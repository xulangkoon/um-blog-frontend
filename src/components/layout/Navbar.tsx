"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // 等待客户端渲染完成
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // 在客户端渲染完成前显示骨架
  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 w-full h-[96px] shadow-md z-50 navbar-override">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-800 dark:text-white no-underline">博客图标</span>
          </div>
          <div className="flex gap-8 mr-[2.5rem]">
            <span className="relative py-2 font-medium">首页</span>
            <span className="relative py-2 font-medium">文章</span>
            <span className="relative py-2 font-medium">关于</span>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed top-0 left-0 w-full h-[96px] shadow-md z-50 navbar-override">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white no-underline !important">
            博客图标
          </Link>
        </div>
        <div className="flex gap-8 mr-[2.5rem]">
          <Link 
            href="/" 
            className={`relative py-2 font-medium no-underline transition-colors duration-300 
              ${pathname === "/" 
                ? "text-purple-600 dark:text-purple-400" 
                : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"}
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-purple-600 dark:after:bg-purple-400
              after:transition-all after:duration-300
              ${pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"}
            `}
          >
            首页
          </Link>
          <Link 
            href="/posts" 
            className={`relative py-2 font-medium no-underline transition-colors duration-300 
              ${pathname === "/posts" 
                ? "text-purple-600 dark:text-purple-400" 
                : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"}
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-purple-600 dark:after:bg-purple-400
              after:transition-all after:duration-300
              ${pathname === "/posts" ? "after:w-full" : "after:w-0 hover:after:w-full"}
            `}
          >
            文章
          </Link>
          <Link 
            href="/about" 
            className={`relative py-2 font-medium no-underline transition-colors duration-300 
              ${pathname === "/about" 
                ? "text-purple-600 dark:text-purple-400" 
                : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"}
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-purple-600 dark:after:bg-purple-400
              after:transition-all after:duration-300
              ${pathname === "/about" ? "after:w-full" : "after:w-0 hover:after:w-full"}
            `}
          >
            关于
          </Link>
        </div>
      </div>
    </div>
  );
}