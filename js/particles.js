// ===== Ambient floating particles ("snow") =====
// A quiet, decorative canvas layer: small pale dots drifting slowly downward
// with a gentle side-to-side sway, like light snow. Purely cosmetic — sits
// behind all content (see #particles z-index in css/style.css) and never
// intercepts clicks (pointer-events:none).
(function () {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let particles = [];

  function countForWidth(w) {
    if (w < 560) return 10;
    if (w < 1000) return 16;
    return 22;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.6,
      speedY: Math.random() * 0.5 + 0.25,
      speedX: (Math.random() - 0.5) * 0.35,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.01 + 0.003,
      baseOpacity: Math.random() * 0.5 + 0.25
    };
  }

  function init() {
    resize();
    const n = countForWidth(width);
    particles = Array.from({ length: n }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      const twinkle = 0.75 + 0.25 * Math.sin(p.sway);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(242, 238, 252,' + (p.baseOpacity * twinkle).toFixed(3) + ')';
      ctx.fill();
    }
  }

  function step() {
    for (const p of particles) {
      p.sway += p.swaySpeed;
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.sway) * 0.15;

      if (p.y > height + 4) { p.y = -4; p.x = Math.random() * width; }
      if (p.x > width + 4) p.x = -4;
      if (p.x < -4) p.x = width + 4;
    }
    draw();
    requestAnimationFrame(step);
  }

  init();
  requestAnimationFrame(step);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      init();
      draw();
    }, 150);
  });
})();
