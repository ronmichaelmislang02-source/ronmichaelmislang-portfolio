const projectCaseStudies = {
  barangay: {
    type: 'PROJECT 01 / CAPSTONE PROJECT',
    title: 'e-Barangay Management System',
    description: 'A digital platform designed to automate and streamline operations for local government units in the Philippines.',
    overview: 'A digital platform meant to simplify barangay services, transactions, and citizen assistance for faster community operations.',
    role: [
      'UI/UX: Responsive interface design',
      'Backend: PHP & MySQL implementation',
      'Database: System data structure and management',
      'Testing: Debugging and validation',
      'Documentation: Technical project records'
    ],
    tags: ['UI/UX', 'PHP', 'MySQL', 'Responsive', 'Testing'],
    gallery: [
      { src: 'residentdashboard.png', alt: 'Barangay dashboard', caption: 'Resident dashboard' },
      { src: 'AdminDashboard.png', alt: 'Citizen services', caption: 'Admin Dashboard' },
      { src: 'Family Member List.png', alt: 'Admin operations', caption: 'Admin operations page' },
      { src: 'RESIDENT LIST (EDIT INFO SECTION).png', alt: 'Document flow', caption: 'Resident List (EDIT INFO SECTION)' },
      { src: 'AuditTrail.png', alt: 'Transactions', caption: 'Monitor Audit Trail' },
      { src: 'populationDashboard.png', alt: 'Project summary', caption: 'Population Report' }
    ]
  },
  delivery: {
    type: 'PROJECT 02 / FREELANCE / PROTOTYPE',
    title: 'Better Boneless — Delivery App',
    description: 'A mobile or web tool that lets you order food, groceries, or packages from your phone.',
    overview: 'A concept delivery app designed to make ordering convenience items simpler through a clean user journey and prototype-based interaction design.',
    role: [
      'UI/UX: User journey and flow design',
      'Prototype: App interface concept',
      'Branding: Visual direction and mockups',
      'Testing: Interaction review and refinements',
      'Presentation: Concept showcase design'
    ],
    tags: ['Figma', 'Canva', 'Prototype', 'UX', 'Mobile UI'],
    gallery: [
      { src: 'appdashboard.png', alt: 'Mobile app dashboard', caption: 'App dashboard' },
      { src: 'loginpage.png', alt: 'Shopping flow', caption: 'Login Page' },
      { src: 'productselection.png', alt: 'Product listing', caption: 'Product selection' },
      { src: 'orderflow.png', alt: 'Checkout screen', caption: 'Checkout experience' },
      { src: 'delivery tracking.png', alt: 'User status', caption: 'Delivery tracking' },
      { src: 'purchase record.png', alt: 'Brand concept', caption: 'Brand concept board' }
    ]
  },
  blender: {
    type: 'PROJECT 03 / ACADEMIC PROJECT',
    title: 'Dining Set Table Scene',
    description: 'A 3D dining set table scene created in Blender, demonstrating foundational 3D modeling, scene composition, and object placement.',
    overview: 'An academic 3D design project focused on building a complete dining environment with materials, lighting, and composition for realistic presentation.',
    role: [
      '3D Modeling: Dining set and objects',
      'Scene Composition: layout and balance',
      'Lighting: Mood and material realism',
      'Rendering: Final visual presentation',
      'Design Review: Iteration and improvements'
    ],
    tags: ['Blender', 'Rendering', '3D Design', 'Modeling', 'Visualization'],
    gallery: [
      { src: 'Dining set scene.png', alt: 'Dining table scene', caption: 'Dining set scene' },
      { src: 'Lighting composition.png', alt: '3D layout', caption: 'Lighting composition' },
      { src: 'Material study.png', alt: 'Material test', caption: 'Material study' },
      { src: 'Close Up Shot.png', alt: 'Lighting setup', caption: 'Close Up Shot' },
      { src: 'Sideview.png', alt: 'Final render', caption: 'Side View' },
      { src: 'Top View.png', alt: 'Academic showcase', caption: 'Top View' }
    ]
  }
};

function renderCaseStudy() {
  const params = new URLSearchParams(window.location.search);
  const projectKey = params.get('project') || 'barangay';
  const project = projectCaseStudies[projectKey] || projectCaseStudies.barangay;

  const typeEl = document.querySelector('[data-project-type]');
  const titleEl = document.querySelector('[data-project-title]');
  const descriptionEl = document.querySelector('[data-project-description]');
  const overviewEl = document.querySelector('[data-project-overview]');
  const roleEl = document.querySelector('[data-project-role]');
  const tagsEl = document.querySelector('[data-project-tags]');
  const galleryEl = document.querySelector('[data-project-gallery]');

  if (typeEl) typeEl.textContent = project.type;
  if (titleEl) titleEl.textContent = project.title;
  if (descriptionEl) descriptionEl.textContent = project.description;
  if (overviewEl) overviewEl.textContent = project.overview;
  if (roleEl) {
    roleEl.innerHTML = project.role.map(item => `<li>${item}</li>`).join('');
  }
  if (tagsEl) {
    tagsEl.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  }
  if (galleryEl) {
    galleryEl.innerHTML = project.gallery.map((item) => `
      <figure class="project-snap">
        <img src="${item.src}" alt="${item.alt}" />
        <figcaption>${item.caption}</figcaption>
      </figure>
    `).join('');
  }

  document.title = `${project.title} — Case Study`;
}

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = year;
  }

  renderCaseStudy();

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
