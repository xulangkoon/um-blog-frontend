"use client";

import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import PostEditor from "@/components/admin/PostEditor";
import PostList from "@/components/admin/PostList";

interface AdminDashboardProps {
  onLogout: () => void;
}

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  published: boolean;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'posts' | 'editor'>('posts');
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [mounted, setMounted] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // 等待客户端渲染完成
  useEffect(() => {
    setMounted(true);
  }, []);

  // 点击外部关闭主题菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuOpen && !(event.target as Element).closest('.theme-menu')) {
        setThemeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [themeMenuOpen]);

  // 从localStorage加载文章数据
  useEffect(() => {
    const savedPosts = localStorage.getItem('blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // 初始化一些示例数据
      const initialPosts: Post[] = [
        {
          id: 1,
          title: "Next.js 13 新特性介绍",
          excerpt: "探索Next.js 13带来的新功能和改进，包括服务器组件、Streaming等...",
          content: "# Next.js 13 新特性介绍\n\nNext.js 13 带来了许多令人兴奋的新特性...",
          date: "2023-05-15",
          slug: "nextjs-13-features",
          published: true
        },
        {
          id: 2,
          title: "使用Tailwind CSS构建现代UI",
          excerpt: "Tailwind CSS是一个实用为先的CSS框架，它可以帮助你快速构建现代网站...",
          content: "# 使用Tailwind CSS构建现代UI\n\nTailwind CSS 是一个功能强大的CSS框架...",
          date: "2023-06-10",
          slug: "modern-ui-with-tailwindcss",
          published: true
        }
      ];
      setPosts(initialPosts);
      localStorage.setItem('blog_posts', JSON.stringify(initialPosts));
    }
  }, []);

  // 保存文章到localStorage
  const savePosts = (updatedPosts: Post[]) => {
    setPosts(updatedPosts);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setActiveTab('editor');
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setActiveTab('editor');
  };

  const handleDeletePost = (postId: number) => {
    if (confirm('确定要删除这篇文章吗？')) {
      const updatedPosts = posts.filter(post => post.id !== postId);
      savePosts(updatedPosts);
    }
  };

  const handleSavePost = (postData: Omit<Post, 'id'>) => {
    if (editingPost) {
      // 编辑现有文章
      const updatedPosts = posts.map(post => 
        post.id === editingPost.id 
          ? { ...postData, id: editingPost.id }
          : post
      );
      savePosts(updatedPosts);
    } else {
      // 创建新文章
      const newPost: Post = {
        ...postData,
        id: Math.max(...posts.map(p => p.id), 0) + 1
      };
      savePosts([...posts, newPost]);
    }
    setActiveTab('posts');
    setEditingPost(null);
  };

  const handleTogglePublish = (postId: number) => {
    const updatedPosts = posts.map(post => 
      post.id === postId 
        ? { ...post, published: !post.published }
        : post
    );
    savePosts(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* 顶部导航栏 */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                博客管理后台
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                管理员已登录
              </span>
              
              {/* 主题切换按钮 */}
               {mounted && (
                 <div className="relative theme-menu">
                  <button 
                    onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                    className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 flex items-center text-sm bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    {theme ? theme.charAt(0).toUpperCase() + theme.slice(1) : 'Auto'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {themeMenuOpen && (
                    <div className="absolute top-full mt-1 right-0 w-32 bg-white dark:bg-gray-800 shadow-lg rounded border border-gray-300 dark:border-gray-600 z-10">
                      <ul>
                        <li>
                          <button 
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm ${theme === 'auto' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                            onClick={() => { setTheme('auto'); setThemeMenuOpen(false); }}
                          >
                            Auto
                          </button>
                        </li>
                        <li>
                          <button 
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                            onClick={() => { setTheme('light'); setThemeMenuOpen(false); }}
                          >
                            Light
                          </button>
                        </li>
                        <li>
                          <button 
                            className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                            onClick={() => { setTheme('dark'); setThemeMenuOpen(false); }}
                          >
                            Dark
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              <button
                onClick={onLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 标签页导航 */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('posts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'posts'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              文章管理
            </button>
            <button
              onClick={() => setActiveTab('editor')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'editor'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {editingPost ? '编辑文章' : '新建文章'}
            </button>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'posts' ? (
          <PostList
            posts={posts}
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
            onTogglePublish={handleTogglePublish}
            onCreateNew={handleCreatePost}
          />
        ) : (
          <PostEditor
            post={editingPost}
            onSave={handleSavePost}
            onCancel={() => {
              setActiveTab('posts');
              setEditingPost(null);
            }}
          />
        )}
      </main>
    </div>
  );
}