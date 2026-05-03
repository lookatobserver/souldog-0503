// Header scroll shadow
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile hamburger toggle
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('open');
  document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav on link click
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Hero image slider with Ken Burns effect (design 1 only)
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.dot');
if (!slides.length) { /* skip on design 2 */ }
let current  = 0;
let timer;

function goTo(index) {
  if (!slides.length) return;
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function next() { goTo(current + 1); }

function startAuto() {
  timer = setInterval(next, 4500);
}

if (slides.length) {
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(i);
      startAuto();
    });
  });
  startAuto();
}
