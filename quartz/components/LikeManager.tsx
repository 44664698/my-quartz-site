import { QuartzComponent, QuartzComponentConstructor } from "../types"

const LikeManager: QuartzComponent = () => {
  return null // 不渲染任何东西，只负责在页面加载后运行脚本
}

LikeManager.afterDOMLoaded = `
  // 找出页面上所有 class 为 inline-like-btn 的按钮
  const containers = document.querySelectorAll('.inline-like-btn');
  
  containers.forEach(container => {
    const btn = container.querySelector('button');
    const countSpan = container.querySelector('.like-count');
    
    if (btn && countSpan) {
      const pageId = window.location.pathname; // 用当前页面路径作为唯一标识
      
      // 加载初始点赞数
      fetch('/like?page=' + encodeURIComponent(pageId))
        .then(res => res.json())
        .then(data => { countSpan.innerText = data.count; })
        .catch(e => console.error('获取点赞数失败', e));

      // 绑定点击事件
      btn.addEventListener('click', () => {
        btn.disabled = true; // 防止狂点
        fetch('/like?page=' + encodeURIComponent(pageId), { method: 'POST' })
          .then(res => res.json())
          .then(data => { countSpan.innerText = data.count; })
          .catch(e => { console.error('点赞失败', e); btn.disabled = false; });
      });
    }
  });
`

LikeManager.css = `
  .inline-like-btn {
    /* 🌟 核心修改：改成行内块元素，就不会换行了 */
    display: inline-block !important; 
    
    /* 🌟 稍微加点左边距，让按钮和文字之间有点呼吸空间 */
    margin: 0 0 0 0.8rem !important; 
    
    /* 🌟 让按钮和文字垂直居中对齐，不然会显得高低不平 */
    vertical-align: middle !important; 
  }
  .inline-like-btn button {
    padding: 0.4rem 1.2rem;
    font-size: 0.95rem;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid var(--lightgray);
    background: var(--light);
    color: var(--dark);
    transition: all 0.2s;
  }
  .inline-like-btn button:hover {
    background: var(--secondary);
    color: white;
    border-color: var(--secondary);
  }
  .inline-like-btn button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default (() => LikeManager) satisfies QuartzComponentConstructor