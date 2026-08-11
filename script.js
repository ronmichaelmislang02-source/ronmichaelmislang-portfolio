document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = year;
  }

  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = open ? '' : 'column';
      navLinks.style.position = open ? '' : 'absolute';
      navLinks.style.top = open ? '' : '72px';
      navLinks.style.right = open ? '' : '20px';
      navLinks.style.background = open ? '' : 'rgba(7, 11, 20, 0.95)';
      navLinks.style.padding = open ? '' : '18px';
      navLinks.style.borderRadius = open ? '' : '16px';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 980) {
          navLinks.style.display = 'none';
        }
      });
    });
  }
});

function handleContact(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  if (status) {
    status.textContent = 'Thanks — your message was sent. I’ll reply soon!';
    status.style.color = '#a7f3d0';
  }
  event.target.reset();
  return false;
}

// Hover tilt effect for cards (subtle)
(function addHoverTilt(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selectors = ['.project-card', '.highlight-card', '.cert-card', '.internship-gallery figure', '.profile-card'];
  const elements = selectors.flatMap(s => Array.from(document.querySelectorAll(s)));
  elements.forEach(el => {
    let frame = null;
    function onMove(e){
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      const rotateY = (x - 0.5) * 6; // degrees
      const rotateX = (0.5 - y) * 4; // degrees
      const translateX = (x - 0.5) * 6; // px
      const translateY = -8; // px lift constant on hover
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `perspective(800px) translateZ(0) translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });
    }
    function onEnter(){
      el.style.transition = 'transform 180ms cubic-bezier(.2,.9,.3,1)';
    }
    function onLeave(){
      if (frame) cancelAnimationFrame(frame);
      el.style.transition = 'transform 260ms ease';
      el.style.transform = '';
    }
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
  });
})();
