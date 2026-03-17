document.body.classList.add('js-ready');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const parent = entry.target.parentElement;
      const siblings = parent.querySelectorAll('.reveal, .reveal-left');
      const idx = Array.from(siblings).indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.09}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));
