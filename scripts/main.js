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