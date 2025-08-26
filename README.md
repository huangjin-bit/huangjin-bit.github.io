<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的GitHub Pages - 二次元星空</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=ZCOOL+QingKe+HuangYou&display=swap">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'ZCOOL QingKe HuangYou', cursive, sans-serif;
            background: linear-gradient(135deg, #0a0a2a, #1a1a40, #0a0a2a);
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }
        
        /* 星空背景效果 */
        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        
        .star {
            position: absolute;
            background-color: #fff;
            border-radius: 50%;
            animation: twinkle 5s infinite ease-in-out;
        }
        
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
        
        /* 流星效果 */
        .meteor {
            position: absolute;
            top: -50px;
            width: 2px;
            height: 50px;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
            animation: meteor 3s linear infinite;
            opacity: 0;
        }
        
        @keyframes meteor {
            0% {
                opacity: 0;
                transform: rotate(-45deg) translateY(0) translateX(0);
            }
            10% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: rotate(-45deg) translateY(1000px) translateX(-1000px);
            }
        }
        
        /* 主要内容区域 */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            z-index: 1;
            position: relative;
        }
        
        header {
            text-align: center;
            padding: 2rem 0;
            margin-bottom: 2rem;
            position: relative;
        }
        
        .avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid #6e45e2;
            box-shadow: 0 0 25px #6e45e2;
            margin: 0 auto;
            overflow: hidden;
            background: linear-gradient(45deg, #9c27b0, #673ab7);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }
        
        h1 {
            font-family: 'Ma Shan Zheng', cursive, sans-serif;
            font-size: 3rem;
            margin: 1rem 0;
            color: #ff6ec7;
            text-shadow: 0 0 10px #ff6ec7;
        }
        
        .tagline {
            font-size: 1.5rem;
            color: #9cecfb;
            margin-bottom: 1rem;
        }
        
        /* 导航菜单 */
        nav {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
            flex-wrap: wrap;
        }
        
        .nav-btn {
            background: rgba(106, 69, 226, 0.3);
            color: #fff;
            border: 2px solid #6e45e2;
            border-radius: 30px;
            padding: 0.8rem 1.5rem;
            margin: 0.5rem;
            cursor: pointer;
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .nav-btn:hover {
            background: rgba(106, 69, 226, 0.6);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(106, 69, 226, 0.4);
        }
        
        /* 内容卡片 */
        .card {
            background: rgba(26, 26, 64, 0.7);
            border: 2px solid #6e45e2;
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            backdrop-filter: blur(5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(110, 69, 226, 0.4);
        }
        
        h2 {
            color: #6e45e2;
            font-size: 2rem;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #6e45e2;
            padding-bottom: 0.5rem;
        }
        
        h3 {
            color: #9cecfb;
            margin: 1.2rem 0 0.5rem;
        }
        
        p {
            line-height: 1.6;
            margin-bottom: 1rem;
            color: #d6d6f0;
        }
        
        ul {
            list-style-type: none;
            padding-left: 1.5rem;
        }
        
        li {
            margin-bottom: 0.8rem;
            position: relative;
        }
        
        li:before {
            content: "✦";
            color: #ff6ec7;
            position: absolute;
            left: -1.5rem;
        }
        
        /* 技能展示 */
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .skill {
            background: rgba(106, 69, 226, 0.3);
            padding: 0.5rem 1.2rem;
            border-radius: 20px;
            border: 1px solid #6e45e2;
        }
        
        /* 项目展示 */
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .project {
            background: rgba(26, 26, 64, 0.8);
            border-radius: 10px;
            padding: 1.5rem;
            border: 1px solid #6e45e2;
            transition: all 0.3s ease;
        }
        
        .project:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(110, 69, 226, 0.4);
        }
        
        /* 页脚 */
        footer {
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
            border-top: 1px solid #6e45e2;
            color: #9cecfb;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 1rem;
        }
        
        .social-link {
            color: #ff6ec7;
            font-size: 1.8rem;
            transition: transform 0.3s ease;
        }
        
        .social-link:hover {
            transform: scale(1.2);
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            h1 {
                font-size: 2.2rem;
            }
            
            .tagline {
                font-size: 1.2rem;
            }
            
            .projects {
                grid-template-columns: 1fr;
            }
            
            .card {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- 星空背景 -->
    <div class="stars" id="stars"></div>
    
    <!-- 流星 -->
    <div class="meteors-container"></div>
    
    <div class="container">
        <header>
            <div class="avatar">
                <span>👨‍💻</span>
            </div>
            <h1>后端程序员的星空小屋</h1>
            <p class="tagline">代码如诗，编织星辰大海</p >
            <p>GitHub Pages 项目展示</p >
        </header>
        
        <nav>
            <button class="nav-btn" onclick="scrollToSection('about')">关于我</button>
            <button class="nav-btn" onclick="scrollToSection('skills')">技术栈</button>
            <button class="nav-btn" onclick="scrollToSection('projects')">项目展示</button>
            <button class="nav-btn" onclick="scrollToSection('github-pages')">GitHub Pages</button>
            <button class="nav-btn" onclick="scrollToSection('contact')">联系我</button>
        </nav>
        
        <section class="card" id="about">
            <h2>关于我</h2>
            <p>嗨！我是一名后端开发者，热爱编程和技术探索。虽然我的主要工作是在服务器端，但我同样喜欢尝试前端技术，创造美观且实用的界面。</p >
            <p>在我的GitHub Pages中，你可以找到我的技术博客、项目展示和一些有趣的实验性项目。这个页面就是使用GitHub Pages搭建的，融合了我喜欢的动漫二次元和星空风格。</p >
            <p>当不写代码的时候，我喜欢看动漫、阅读科幻小说和仰望星空寻找灵感。</p >
        </section>
        
        <section class="card" id="skills">
            <h2>技术栈</h2>
            <p>作为一名后端开发者，我主要使用以下技术：</p >
            <div class="skills">
                <span class="skill">Java</span>
                <span class="skill">Python</span>
                <span class="skill">Spring Boot</span>
                <span class="skill">Django</span>
                <span class="skill">MySQL</span>
                <span class="skill">Redis</span>
                <span class="skill">Docker</span>
                <span class="skill">Kubernetes</span>
                <span class="skill">AWS</span>
                <span class="skill">Git</span>
                <span class="skill">RESTful APIs</span>
                <span class="skill">Microservices</span>
            </div>
        </section>
        
        <section class="card" id="projects">
            <h2>项目展示</h2>
            <p>以下是我在GitHub上的一些项目：</p >
            <div class="projects">
                <div class="project">
                    <h3>分布式任务调度系统</h3>
                    <p>基于Spring Boot和Quartz的分布式任务调度平台，支持动态添加任务和监控执行状态。</p >
                </div>
                <div class="project">
                    <h3>微服务API网关</h3>
                    <p>使用Java开发的API网关，提供路由、认证、限流和监控等功能。</p >
                </div>
                <div class="project">
                    <h3>数据分析平台</h3>
                    <p>基于Python和Django的数据分析与可视化平台，支持多种数据源和自定义报表。</p >
                </div>
            </div>
        </section>
        
        <section class="card" id="github-pages">
            <h2>关于GitHub Pages</h2>
            <p>GitHub Pages是GitHub提供的一个静态网站托管服务，可以直接从GitHub仓库托管个人、项目或组织的页面。</p >
            
            <h3>优点：</h3>
            <ul>
                <li>完全免费</li>
                <li>与GitHub无缝集成</li>
                <li支持自定义域名</li>
                <li>自动使用SSL加密</li>
                <li>易于使用和部署</li>
            </ul>
            
            <h3>如何使用：</h3>
            <p>1. 创建一个新的GitHub仓库，命名为<code>username.github.io</code></p >
            <p>2. 将你的HTML、CSS和JavaScript文件添加到仓库中</p >
            <p>3. 通过访问<code>https://username.github.io</code>查看你的网站</p >
            
            <p>作为后端开发者，GitHub Pages是展示项目和技术博客的完美平台，无需担心服务器配置和维护。</p >
        </section>
        
        <section class="card" id="contact">
            <h2>联系我</h2>
            <p>如果你对我的项目感兴趣，或者想与我交流技术，欢迎通过以下方式联系我：</p >
            <div class="social-links">
                <a href=" " class="social-link">GitHub</a >
                <a href="#" class="social-link">Twitter</a >
                <a href="#" class="social-link">LinkedIn</a >
                <a href="#" class="social-link">Email</a >
            </div>
        </section>
        
        <footer>
            <p>✨ 感谢访问我的GitHub Pages ✨</p >
            <p>星空下的代码梦想 | 2023</p >
        </footer>
    </div>

    <script>
        // 创建星星背景
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 200;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starsContainer.appendChild(star);
            }
        }
        
        // 创建流星效果
        function createMeteors() {
            const meteorsContainer = document.querySelector('.meteors-container');
            const meteorCount = 10;
            
            for (let i = 0; i < meteorCount; i++) {
                const meteor = document.createElement('div');
                meteor.classList.add('meteor');
                
                meteor.style.left = `${Math.random() * 100}%`;
                meteor.style.top = `${Math.random() * 100}%`;
                meteor.style.animationDelay = `${Math.random() * 5}s`;
                
                meteorsContainer.appendChild(meteor);
            }
        }
        
        // 平滑滚动到指定区域
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // 初始化
        window.onload = function() {
            createStars();
            createMeteors();
        };
    </script>
</body>
</html>
