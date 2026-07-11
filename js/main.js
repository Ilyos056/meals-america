// ===== Meals America — shared JS =====

// Get Started modal
const overlay = document.getElementById('getStartedModal');

document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    if (overlay) overlay.classList.add('open');
  });
});

if (overlay) {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
  const closeBtn = overlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });
}

// Fake submit
document.querySelectorAll('form.get-started-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We will reply back to you within 48 business hours.');
    form.reset();
    if (overlay) overlay.classList.remove('open');
  });
});

// Mobile nav
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
if (burger && nav) {
  burger.addEventListener('click', () => nav.classList.toggle('open'));
}
