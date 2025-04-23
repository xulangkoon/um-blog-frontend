import Link from "next/link";

export default function Home() {
  // 模拟数据，后续会从API获取
  const featuredPosts = [
    {
      id: 1,
      title: "Next.js 13 新特性介绍",
      excerpt: "探索Next.js 13带来的新功能和改进，包括服务器组件、Streaming等...",
      date: "2023-05-15",
      slug: "nextjs-13-features",
    },
    {
      id: 2,
      title: "使用Tailwind CSS构建现代UI",
      excerpt: "Tailwind CSS是一个实用为先的CSS框架，它可以帮助你快速构建现代网站...",
      date: "2023-06-10",
      slug: "modern-ui-with-tailwindcss",
    },
    {
      id: 3,
      title: "React Hooks深度解析",
      excerpt: "深入了解React Hooks的工作原理，以及如何使用它们来优化你的React应用...",
      date: "2023-07-22",
      slug: "understanding-react-hooks",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* 欢迎部分 */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">欢迎来到UM Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          分享Web开发、编程技巧以及技术经验
        </p>
        <div className="mt-8">
          <Link 
            href="/posts" 
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            浏览所有文章
          </Link>
        </div>
      </section>

      {/* 特色文章部分 */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">特色文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  阅读更多 →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link 
            href="/posts" 
            className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            查看所有文章 →
          </Link>
        </div>
      </section>
    </div>
  );
}