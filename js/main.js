function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const idx = { home: 0, pricing: 1, whatsapp: 2 }[name];
  document.querySelectorAll('.nav-tabs button')[idx].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
