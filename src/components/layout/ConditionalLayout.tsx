'use client';

import { usePathname } from 'next/navigation';
import MainLayout from './MainLayout';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // 如果是admin页面，直接返回children，不使用MainLayout
  if (pathname.startsWith('/admin')) {
    return <>{children}</>;
  }
  
  // 其他页面使用MainLayout
  return <MainLayout>{children}</MainLayout>;
}