import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/lib/ThemeContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="flex-grow pt-[96px]">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}