// Theme toggle
const html = document.documentElement;
const toggle = () => {
html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
try { localStorage.setItem('theme', html.getAttribute('data-theme')); } catch {}
};
document.getElementById('theme-toggle')?.addEventListener('click', e => {
e.preventDefault(); toggle(); });
document.getElementById('theme-toggle-mobile')?.addEventListener('click', e => {
e.preventDefault(); toggle(); });
// Persist theme
try {
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme:
dark)').matches) html.setAttribute('data-theme', 'dark');
} catch {}
// Year
document.getElementById('year').textContent = new Date().getFullYear();