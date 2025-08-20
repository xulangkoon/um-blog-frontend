"use client";

import { useState, useEffect } from "react";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  // 管理员登录状态
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查是否已经登录
    const token = localStorage.getItem('admin_token');
    const loginTime = localStorage.getItem('admin_login_time');
    
    if (token && loginTime) {
      const now = Date.now();
      const loginTimestamp = parseInt(loginTime);
      // Token有效期为24小时
      const tokenExpiry = 24 * 60 * 60 * 1000;
      
      if (now - loginTimestamp < tokenExpiry) {
        setIsAuthenticated(true);
      } else {
        // Token过期，清除本地存储
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_login_time');
      }
    }
    
    setIsLoading(false);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_login_time');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {!isAuthenticated ? (
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
      ) : (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </div>
  );
}