import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "管理员后台 - UM Blog",
  description: "UM Blog 管理员后台系统",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}