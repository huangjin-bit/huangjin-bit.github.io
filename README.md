<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>动漫背景画廊</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#FF6B8B',
                        secondary: '#7B66FF',
                    },
                    fontFamily: {
                        sans: ['Noto Sans SC', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    
    <style type="text/tailwindcss">
        @layer utilities {
            .content-auto {
                content-visibility: auto;
            }
            .bg-blur {
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
            }
            .text-shadow {
                text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            }
            .transition-bg {
                transition: background-image 1s ease-in-out;
            }
        }
    </style>
</head>
<body class="min-h-screen overflow-x-hidden font-sans">
    <!-- 主背景容器 -->
    <div id="background-container" class="fixed inset-0 transition-bg bg-cover bg-center z-0" style="background-image: url('https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/4f4ea9e481e04936b39ac9dbd4ef87c8.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1756822870&x-signature=Tqcd1sqtZoyS7k31lVvG9UCdytQ%3D')">
    </div>
    
    <!-- 半透明遮罩 -->
    <div class="fixed inset-0 bg-black/30 z-10"></div>
    
    <!-- 主要内容 -->
    <div class="relative z-20 min-h-screen flex flex-col">
        <!-- 顶部导航 -->
        <header class="w-full py-6 px-4 md:px-8 bg-transparent">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-2xl md:text-3xl font-bold text-white text-shadow">
                    <i class="fa fa-picture-o mr-2"></i>动漫画廊
                </h1>
                <p class="hidden md:block text-white text-shadow">点击缩略图切换背景</p>
            </div>
        </header>
        
        <!-- 中间内容 -->
        <main class="flex-grow flex flex-col items-center justify-center px-4 py-8">
            <div class="max-w-4xl mx-auto text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-bold text-white text-shadow mb-6">动漫风景精选</h2>
                <p class="text-lg md:text-xl text-white/90 text-shadow max-w-2xl mx-auto">
                    欣赏这些精美的动漫背景画作，点击下方缩略图可以切换不同的背景
                </p>
            </div>
            
            <!-- 缩略图导航 -->
            <div class="container mx-auto max-w-5xl px-4">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    <!-- 缩略图 1 -->
                    <div class="thumbnail-item cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform" 
                         data-img="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/4f4ea9e481e04936b39ac9dbd4ef87c8.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1756822870&x-signature=Tqcd1sqtZoyS7k31lVvG9UCdytQ%3D">
                        <img src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/4f4ea9e481e04936b39ac9dbd4ef87c8.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1756822870&x-signature=Tqcd1sqtZoyS7k31lVvG9UCdytQ%3D" 
                             alt="动漫风景1" class="w-full h-full object-cover aspect-square">
                    </div>
                    
                    <!-- 缩略图 2 -->
                    <div class="thumbnail-item cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
                         data-img="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/6a9bdcfe67324b4eac27615533c565ac.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1756827097&x-signature=PAJleB2L60TXlFkc82rdG2WrBtc%3D">
                        <img src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/6a9bdcfe67324b4eac27615533c565ac.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1756827097&x-signature=PAJleB2L60TXlFkc82rdG2WrBtc%3D" 
                             alt="动漫风景2" class="w-full h-full object-cover aspect-square">
                    </div>
                    
                    <!-- 缩略图 3 -->
                    <div class="thumbnail-item cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
                         data-img="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/cb584ffd393a4f578a1feb4abb49d24e.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1756827172&x-signature=ztag4Er8jAB%2F434VHjFeD0FWxW8%3D">
                        <img src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/cb584ffd393a4f578a1feb4abb49d24e.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1756827172&x-signature=ztag4Er8jAB%2F434VHjFeD0FWxW8%3D" 
                             alt="动漫风景3" class="w-full h-full object-cover aspect-square">
                    </div>
                    
                    <!-- 缩略图 4 -->
                    <div class="thumbnail-item cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
                         data-img="https://picsum.photos/id/1015/1200/800?anime=mountains">
                        <img src="https://picsum.photos/id/1015/1200/800?anime=mountains" 
                             alt="动漫风景4" class="w-full h-full object-cover aspect-square">
                    </div>
                    
                    <!-- 缩略图 5 -->
                    <div class="thumbnail-item cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
                         data-img="https://picsum.photos/id/1019/1200/800?anime=forest">
                        <img src="https://picsum.photos/id/1019/1200/800?anime=forest" 
                             alt="动漫风景5" class="w-full h-full object-cover aspect-square">
                    </div>
                </div>
            </div>
        </main>
        
        <!-- 页脚 -->
        <footer class="w-full py-6 px-4 bg-black/40 bg-blur">
            <div class="container mx-auto text-center text-white/80">
                <p>动漫背景画廊 &copy; 2023</p>
                <p class="text-sm mt-1">点击缩略图切换背景 | 享受动漫美景</p>
            </div>
        </footer>
    </div>
    
    <script>
        // 获取DOM元素
        const backgroundContainer = document.getElementById('background-container');
        const thumbnailItems = document.querySelectorAll('.thumbnail-item');
        
        // 为每个缩略图添加点击事件
        thumbnailItems.forEach(item => {
            item.addEventListener('click', () => {
                // 获取图片URL
                const imgUrl = item.getAttribute('data-img');
                
                // 添加淡入淡出效果
                backgroundContainer.style.opacity = '0';
                
                setTimeout(() => {
                    // 更改背景图片
                    backgroundContainer.style.backgroundImage = `url('${imgUrl}')`;
                    backgroundContainer.style.opacity = '1';
                    
                    // 添加活跃状态样式
                    thumbnailItems.forEach(thumb => thumb.classList.remove('ring-2', 'ring-primary'));
                    item.classList.add('ring-2', 'ring-primary');
                }, 500);
            });
        });
        
        // 设置第一张图片为默认活跃状态
        if (thumbnailItems.length > 0) {
            thumbnailItems[0].classList.add('ring-2', 'ring-primary');
        }
        
        // 初始设置淡入效果
        backgroundContainer.style.opacity = '0';
        window.addEventListener('load', () => {
            setTimeout(() => {
                backgroundContainer.style.transition = 'opacity 1s ease-in-out';
                backgroundContainer.style.opacity = '1';
            }, 100);
        });
    </script>
</body>
</html>
