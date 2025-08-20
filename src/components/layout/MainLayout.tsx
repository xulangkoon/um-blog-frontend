import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-col min-h-screen main-layout-override">
        <Navbar />
        <main className="flex-grow pt-24 pb-12">{children}</main>
        <Footer />
      </div>
  );
}