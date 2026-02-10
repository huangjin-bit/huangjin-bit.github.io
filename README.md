# ✦ 星辰代码 - Anime Tech Blog

一个融合动漫美学与技术深度的个人博客，专注于后端开发、数据科学与AI。

## 🚀 技术栈

- **框架**: [Astro](https://astro.build/) - 静态站点生成
- **内容**: Markdown / MDX
- **样式**: 纯CSS（动漫风格主题）
- **部署**: GitHub Pages
- **特性**: RSS订阅、SEO优化、响应式设计

## 📁 项目结构

```
├── src/
│   ├── components/     # 可复用组件
│   ├── content/
│   │   └── blog/       # Markdown博客文章
│   ├── layouts/        # 页面布局
│   ├── pages/          # 路由页面
│   └── styles/         # 全局样式
├── public/             # 静态资源
├── .github/workflows/  # GitHub Actions部署
└── astro.config.mjs    # Astro配置
```

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📝 添加新文章

在 `src/content/blog/` 目录下创建新的 `.md` 文件：

```markdown
---
title: '文章标题'
description: '文章描述'
pubDate: 2025-01-01
category: 'backend'  # backend | data-science | ai
tags: ['标签1', '标签2']
heroImage: '/images/your-image.jpg'  # 可选
draft: false
---

文章正文...
```

## 🌐 部署到 GitHub Pages

1. 在 `astro.config.mjs` 中修改 `site` 为你的 GitHub Pages URL
2. 将代码推送到 GitHub 仓库的 `main` 分支
3. 在仓库 Settings → Pages 中选择 "GitHub Actions" 作为部署源
4. GitHub Actions 会自动构建并部署

## 📂 扩展指南

### 添加新分类

1. 在 `src/content/config.ts` 的 `category` 枚举中添加新分类
2. 在 `src/pages/categories/[category].astro` 的 `getStaticPaths` 中添加路径
3. 更新 Header、Footer 中的导航链接

### 添加新页面

在 `src/pages/` 目录下创建新的 `.astro` 文件即可自动生成路由。

### 自定义主题

修改 `src/styles/global.css` 中的 CSS 变量即可自定义颜色、字体等。

## 📄 License

MIT
