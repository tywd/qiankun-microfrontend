// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './styles/mermaid-custom.css'

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app }) {
    // 不再需要注册自定义组件
  },
  
  setup() {
    // 在客户端环境下执行
    if (typeof window !== 'undefined') {
      // 等待页面加载完成
      window.addEventListener('DOMContentLoaded', () => {
        // 添加自定义交互功能
        setTimeout(addMermaidInteractions, 1500);
      });
    }
  }
}

// 为Mermaid图表添加交互功能
function addMermaidInteractions() {
  const mermaidDivs = document.querySelectorAll('.mermaid');
  
  mermaidDivs.forEach((div, index) => {
    // 记录原始内容用于切换
    const originalContent = div.innerHTML;
    const originalCode = div.textContent;
    
    // 创建工具栏
    const toolbar = document.createElement('div');
    toolbar.className = 'mermaid-toolbar';
    toolbar.innerHTML = `
      <button class="toolbar-btn toggle-view" title="切换视图">📝</button>
      <button class="toolbar-btn zoom-in" title="放大">➕</button>
      <button class="toolbar-btn zoom-out" title="缩小">➖</button>
      <button class="toolbar-btn reset-zoom" title="适应屏幕">🔄</button>
      <button class="toolbar-btn fullscreen" title="全屏查看">⬇️</button>
    `;
    
    // 创建容器包裹图表和工具栏
    const container = document.createElement('div');
    container.className = 'mermaid-interactive-container';
    container.dataset.scale = '1';
    container.dataset.isCode = 'false';
    
    // 将div内容移到新容器中
    div.parentNode.insertBefore(container, div);
    container.appendChild(toolbar);
    container.appendChild(div);
    
    // 添加事件监听
    const toggleBtn = toolbar.querySelector('.toggle-view');
    const zoomInBtn = toolbar.querySelector('.zoom-in');
    const zoomOutBtn = toolbar.querySelector('.zoom-out');
    const resetZoomBtn = toolbar.querySelector('.reset-zoom');
    const fullscreenBtn = toolbar.querySelector('.fullscreen');
    
    // 切换视图
    toggleBtn.addEventListener('click', () => {
      const isCode = container.dataset.isCode === 'true';
      
      if (isCode) {
        // 切换回图表视图
        div.innerHTML = originalContent;
        toggleBtn.innerHTML = '📝';
        toggleBtn.title = '查看代码';
        container.dataset.isCode = 'false';
      } else {
        // 切换到代码视图
        div.innerHTML = `<pre><code>${originalCode}</code></pre>`;
        toggleBtn.innerHTML = '📊';
        toggleBtn.title = '查看图表';
        container.dataset.isCode = 'true';
      }
    });
    
    // 放大
    zoomInBtn.addEventListener('click', () => {
      if (container.dataset.isCode === 'true') return;
      
      const currentScale = parseFloat(container.dataset.scale);
      const newScale = Math.min(currentScale + 0.1, 2);
      container.dataset.scale = newScale;
      div.style.transform = `scale(${newScale})`;
    });
    
    // 缩小
    zoomOutBtn.addEventListener('click', () => {
      if (container.dataset.isCode === 'true') return;
      
      const currentScale = parseFloat(container.dataset.scale);
      const newScale = Math.max(currentScale - 0.1, 0.5);
      container.dataset.scale = newScale;
      div.style.transform = `scale(${newScale})`;
    });
    
    // 重置缩放
    resetZoomBtn.addEventListener('click', () => {
      if (container.dataset.isCode === 'true') return;
      
      container.dataset.scale = '1';
      div.style.transform = 'scale(1)';
    });
    
    // 全屏
    fullscreenBtn.addEventListener('click', () => {
      container.classList.toggle('fullscreen');
      
      if (container.classList.contains('fullscreen')) {
        document.body.style.overflow = 'hidden';
        fullscreenBtn.innerHTML = '⬆️';
        fullscreenBtn.title = '退出全屏';
      } else {
        document.body.style.overflow = 'auto';
        fullscreenBtn.innerHTML = '⬇️';
        fullscreenBtn.title = '全屏查看';
      }
    });
  });
}