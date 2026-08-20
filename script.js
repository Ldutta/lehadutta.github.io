const root = document.body;
const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('leha-theme');
if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');
toggle.addEventListener('click', () => { root.classList.toggle('dark'); localStorage.setItem('leha-theme', root.classList.contains('dark') ? 'dark' : 'light'); });

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-skill]').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('.skill-item');
  const shouldOpen = !item.classList.contains('active');
  document.querySelectorAll('.skill-item').forEach(entry => { entry.classList.remove('active'); entry.querySelector('button').setAttribute('aria-expanded', 'false'); });
  if (shouldOpen) { item.classList.add('active'); button.setAttribute('aria-expanded', 'true'); }
}));

document.getElementById('year').textContent = new Date().getFullYear();
const glow = document.querySelector('.cursor-glow');
addEventListener('pointermove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });
