// Characters to use for the animation
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

function randomString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function animateCornerText(id, length) {
  const el = document.getElementById(id);
  if (!el) return;
  setInterval(() => {
    el.textContent = randomString(length);
  }, 120);
}

animateCornerText('corner-upper-right', 12);
animateCornerText('corner-lower-left', 7);

function randomGlitch(val, range) {
  return val + (Math.random() - 0.5) * range;
}

function glitchShapes() {
  // Circles
  const c1 = document.getElementById('glitch-c1');
  if (c1) c1.setAttribute('cx', randomGlitch(60, 4));
  const c2 = document.getElementById('glitch-c2');
  if (c2) c2.setAttribute('cy', randomGlitch(0.95 * window.innerHeight, 8));
  const c3 = document.getElementById('glitch-c3');
  if (c3) c3.setAttribute('r', randomGlitch(24, 2));

  // Rectangles
  const r1 = document.getElementById('glitch-r1');
  if (r1) r1.setAttribute('y', randomGlitch(0.2 * window.innerHeight, 6));
  const r2 = document.getElementById('glitch-r2');
  if (r2) r2.setAttribute('height', randomGlitch(90, 8));
  const r3 = document.getElementById('glitch-r3');
  if (r3) r3.setAttribute('transform', `rotate(${18 + (Math.random() - 0.5) * 6} 28 50)`);
  const r4 = document.getElementById('glitch-r4');
  if (r4) r4.setAttribute('transform', `rotate(${-22 + (Math.random() - 0.5) * 8} 28 56)`);

  // Polygon
  const p1 = document.getElementById('glitch-p1');
  if (p1) {
    const baseY = 600, baseX = 120;
    p1.setAttribute('points', 
      `${baseX + randomGlitch(0, 6)},${baseY + randomGlitch(0, 6)} ` +
      `${160 + randomGlitch(0, 6)},${540 + randomGlitch(0, 6)} ` +
      `${200 + randomGlitch(0, 6)},${600 + randomGlitch(0, 6)}`
    );
  }

  // Lines
  const l1 = document.getElementById('glitch-l1');
  if (l1) l1.setAttribute('y2', randomGlitch(0.89 * window.innerHeight, 8));
  const l2 = document.getElementById('glitch-l2');
  if (l2) l2.setAttribute('y2', randomGlitch(0.10 * window.innerHeight, 6));

  // Ellipse
  const e1 = document.getElementById('glitch-e1');
  if (e1) e1.setAttribute('rx', randomGlitch(28, 2));
}

// Animate glitch every 200ms
setInterval(glitchShapes, 200);