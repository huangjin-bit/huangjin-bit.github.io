<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My GitHub Page</title>
    <!-- 引入Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- 引入Font Awesome图标 -->
    <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
    
    <!-- 配置Tailwind主题 -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#2563eb',
                        secondary: '#64748b',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 text-gray-800">
    <!-- 导航栏 -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold text-primary">
                <i class="fa fa-github mr-2"></i>Project Hub
            </h1>
            <nav class="hidden md:flex space-x-6">
                <a href="#home" class="hover:text-primary transition-colors">Home</a>
                <a href="#projects" class="hover:text-primary transition-colors">Projects</a>
                <a href="#about" class="hover:text-primary transition-colors">About</a>
                <a href="#contact" class="hover:text-primary transition-colors">Contact</a>
            </nav>
        </div>
    </header>

    <!-- 主页内容 -->
    <main>
        <!-- 英雄区域 -->
        <section id="home" class="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl md:text-5xl font-bold mb-6">GitHub Pages Showcase</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    A collection of projects and resources hosted on GitHub Pages. 
                    Explore the content below to learn more about my work.
                </p>
            </div>
        </section>

        <!-- 项目展示 -->
        <section id="projects" class="py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- 项目卡片 1 -->
                    <div class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <h3 class="text-xl font-bold mb-2 text-primary">Data Visualization Tool</h3>
                        <p class="text-gray-600 mb-3">An interactive tool for visualizing complex datasets with charts and graphs.</p>
                        <a href="https://github.com" target="_blank" class="text-secondary hover:text-primary transition-colors inline-flex items-center">
                            <i class="fa fa-external-link mr-1"></i> View Repository
                        </a>
                    </div>
                    
                    <!-- 项目卡片 2 -->
                    <div class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <h3 class="text-xl font-bold mb-2 text-primary">API Documentation</h3>
                        <p class="text-gray-600 mb-3">Comprehensive documentation for RESTful APIs with example requests and responses.</p>
                        <a href="https://github.com" target="_blank" class="text-secondary hover:text-primary transition-colors inline-flex items-center">
                            <i class="fa fa-external-link mr-1"></i> View Repository
                        </a>
                    </div>
                    
                    <!-- 项目卡片 3 -->
                    <div class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <h3 class="text-xl font-bold mb-2 text-primary">Portfolio Template</h3>
                        <p class="text-gray-600 mb-3">A responsive portfolio template for showcasing creative work and projects.</p>
                        <a href="https://github.com" target="_blank" class="text-secondary hover:text-primary transition-colors inline-flex items-center">
                            <i class="fa fa-external-link mr-1"></i> View Repository
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 关于部分 -->
        <section id="about" class="py-16 bg-gray-100">
            <div class="container mx-auto px-4 max-w-3xl">
                <h2 class="text-3xl font-bold text-center mb-8">About This Page</h2>
                <p class="text-gray-700 mb-4">
                    This static website is hosted on GitHub Pages, a free service that allows you to publish 
                    websites directly from a GitHub repository. It's built with HTML and styled using Tailwind CSS 
                    for a modern, responsive design.
                </p>
                <p class="text-gray-700 mb-4">
                    The site structure includes:
                </p>
                <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>A responsive navigation menu</li>
                    <li>Project showcases with links to repositories</li>
                    <li>Information about the site's purpose and structure</li>
                    <li>Contact information with social media links</li>
                </ul>
                <p class="text-gray-700">
                    All content is static and can be easily modified by editing the HTML file directly in the repository.
                </p>
            </div>
        </section>

        <!-- 联系部分 -->
        <section id="contact" class="py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Get Connected</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div class="bg-white p-6 rounded-lg text-center border border-gray-100">
                        <div class="text-primary text-2xl mb-3">
                            <i class="fa fa-github"></i>
                        </div>
                        <h3 class="font-bold mb-2">GitHub</h3>
                        <a href="https://github.com" target="_blank" class="text-secondary hover:text-primary transition-colors">github.com/username</a>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg text-center border border-gray-100">
                        <div class="text-primary text-2xl mb-3">
                            <i class="fa fa-twitter"></i>
                        </div>
                        <h3 class="font-bold mb-2">Twitter</h3>
                        <a href="https://twitter.com" target="_blank" class="text-secondary hover:text-primary transition-colors">@username</a>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg text-center border border-gray-100">
                        <div class="text-primary text-2xl mb-3">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <h3 class="font-bold mb-2">Email</h3>
                        <a href="mailto:user@example.com" class="text-secondary hover:text-primary transition-colors">user@example.com</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
            <p>&copy; 2023 GitHub Pages Showcase</p>
            <p class="text-gray-400 text-sm mt-2">Hosted on GitHub Pages</p>
        </div>
    </footer>

    <!-- 平滑滚动脚本 -->
    <script>
        // 实现锚点平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>

