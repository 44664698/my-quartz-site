import { QuartzComponent, QuartzComponentConstructor } from "../types"

const LikeManager: QuartzComponent = () => {
  return null // 不渲染任何东西，只负责在页面加载后运行脚本
}

LikeManager.afterDOMLoaded = `
  function setupLikeButtons() {
    // 用 body 上的 data-slug 作为页面唯一标识（SPA 下比 location.pathname 更可靠）
    const pageId = document.body.dataset.slug || window.location.pathname;

    // 找出当前页面上所有 class 为 inline-like-btn 的按钮
    document.querySelectorAll('.inline-like-btn').forEach(container => {
      const btn = container.querySelector('button');
      const countSpan = container.querySelector('.like-count');
      if (!btn || !countSpan) return;

      // 防止 SPA 切换页面时对同一个按钮重复绑定事件
      if (btn.dataset.likeBound === 'true') return;
      btn.dataset.likeBound = 'true';

      // 加载初始点赞数
      fetch('/like?page=' + encodeURIComponent(pageId))
        .then(res => {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.json();
        })
        .then(data => { countSpan.innerText = String(data.count ?? 0); })
        .catch(e => console.error('获取点赞数失败', e));

      // 绑定点击事件
      const onClick = () => {
        btn.disabled = true; // 防止狂点
        fetch('/like?page=' + encodeURIComponent(pageId), { method: 'POST' })
          .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
          })
          .then(data => { countSpan.innerText = String(data.count ?? 0); })
          .catch(e => {
            console.error('点赞失败', e);
            btn.disabled = false;
          });
      };
      btn.addEventListener('click', onClick);

      // SPA 切换页面时清理监听，避免内存泄漏 / 重复绑定
      if (window.addCleanup) {
        window.addCleanup(() => {
          btn.removeEventListener('click', onClick);
          delete btn.dataset.likeBound;
        });
      }
    });
  }

  // SPA 每次导航后都会触发 nav 事件；首次加载也会触发一次
  document.addEventListener('nav', setupLikeButtons);
`

LikeManager.css = `
  .inline-like-btn {
    margin: 1.5rem 0;
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