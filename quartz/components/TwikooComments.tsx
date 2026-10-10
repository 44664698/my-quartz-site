import { QuartzComponent, QuartzComponentConstructor } from "../types"

const TwikooComments: QuartzComponent = () => {
  return (
    <div id="twikoo-comments" style="margin-top: 2rem;"></div>
  )
}

TwikooComments.afterDOMLoaded = `
  const initTwikoo = () => {
    if (window.twikoo) {
      twikoo.init({
        envId: 'https://twikoo.44664698.xyz', // 🌟 这里已经帮你换成了刚刚解析的子域名
        el: '#twikoo-comments',
        lang: 'zh-CN',
      });
    }
  };
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/twikoo@latest/dist/twikoo.min.js';
  script.onload = initTwikoo;
  document.head.appendChild(script);
`

export default (() => TwikooComments) satisfies QuartzComponentConstructor