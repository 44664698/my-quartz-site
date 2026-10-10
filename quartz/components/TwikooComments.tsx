import { QuartzComponent, QuartzComponentConstructor } from "../types"

const TwikooComments: QuartzComponent = () => {
  return (
    <div id="twikoo-comments" style="margin-top: 2rem; min-height: 100px;"></div>
  )
}

TwikooComments.afterDOMLoaded = `
  console.log('🚀 Twikoo: 脚本已加载');

  function initTwikoo() {
    const container = document.getElementById('twikoo-comments');
    if (!container) return; // 页面没有评论容器就跳过

    // 防止重复初始化
    if (container.innerHTML !== '') return;

    if (window.twikoo) {
      window.twikoo.init({
        envId: 'https://twikoo.44664698.xyz',
        el: '#twikoo-comments',
        lang: 'zh-CN',
      }).then(() => {
        console.log('🎉 Twikoo: 初始化成功');
      }).catch((e) => {
        console.error('❌ Twikoo: 初始化失败', e);
      });
    }
  }

  // 加载 Twikoo 官方脚本（换成国内访问更稳定的 CDN）
  if (!window.twikoo) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/twikoo@1.7.24/dist/twikoo.min.js';
    script.onload = () => {
      console.log('✅ Twikoo: 脚本加载成功');
      initTwikoo();
    };
    script.onerror = () => console.error('❌ Twikoo: 脚本加载失败');
    document.head.appendChild(script);
  } else {
    initTwikoo();
  }

  // 🌟 关键：监听 Quartz SPA 的路由变化，每次切换页面都重新初始化
  document.addEventListener('nav', () => {
    console.log('🔄 Twikoo: 页面切换，准备重新初始化');
    // 清空旧容器的内容
    const container = document.getElementById('twikoo-comments');
    if (container) container.innerHTML = '';
    // 给一点延迟，等 DOM 渲染完成
    setTimeout(initTwikoo, 200);
  });
`

export default (() => TwikooComments) satisfies QuartzComponentConstructor