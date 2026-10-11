import { QuartzComponent, QuartzComponentConstructor } from "./types"

const TwikooComments: QuartzComponent = () => {
  return (
    <div id="twikoo-comments" style={{ marginTop: "2rem" }}></div>
  )
}

TwikooComments.afterDOMLoaded = `
  (function(){
    if (window.twikoo) { initTwikoo(); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/twikoo@1.6.42/dist/twikoo.min.js';
    s.onload = initTwikoo;
    document.head.appendChild(s);
    function initTwikoo(){
      twikoo.init({
        envId: 'https://twikoo.44664698.xyz',
        el: '#twikoo-comments',
        lang: 'zh-CN'
      });
    }
  })();
`

export default (() => TwikooComments) satisfies QuartzComponentConstructor