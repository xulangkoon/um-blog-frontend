This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# UM Blog - 个人博客项目

## 项目功能规划

### 核心功能
- **博客文章展示**
  - 首页文章列表（分页、排序）
  - 文章详情页
  - 文章分类/标签系统
  - 文章搜索功能
- **用户系统**
  - 管理员登录
  - 个人资料管理
- **内容管理**
  - 文章创建/编辑/删除
  - Markdown 编辑器支持
  - 图片上传功能
- **交互功能**
  - 文章评论系统
  - 点赞功能
  - 阅读量统计
- **其他功能**
  - 响应式设计（移动端适配）
  - 暗黑模式切换
  - SEO 优化
  - 网站数据统计

## 开发路线图

### 阶段一：基础结构搭建
1. 设计页面布局和导航结构
2. 搭建组件库和样式系统
3. 实现首页和文章列表页面布局

### 阶段二：核心功能实现
1. 实现文章展示功能
2. 搭建数据获取逻辑和API接口
3. 实现文章详情页面

### 阶段三：用户系统和管理功能
1. 实现登录和认证功能
2. 开发文章管理界面
3. 实现内容编辑功能

### 阶段四：交互功能和优化
1. 添加评论系统
2. 实现额外互动功能
3. 性能优化和SEO调整

## 开发指南

### 从哪里开始

1. **搭建基础项目结构**：
   - 创建组件目录
   - 设计路由结构
   - 配置样式系统

2. **开发核心页面和组件**：
   - 导航栏组件
   - 页脚组件 
   - 首页布局
   - 文章列表组件
   - 文章卡片组件

3. **实现数据流**：
   - 先使用静态数据或Mock API
   - 后续连接到真实后端

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
