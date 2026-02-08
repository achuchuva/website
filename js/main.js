document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length) {
    const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    navLinks.forEach((link) => link.removeAttribute('aria-current'));

    for (const link of navLinks) {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) continue;

      const linkFile = new URL(href, window.location.href).pathname.split('/').pop()?.toLowerCase();
      if (!linkFile) continue;

      if (linkFile === currentFile) {
        link.setAttribute('aria-current', 'page');
        break;
      }
    }
  }
});