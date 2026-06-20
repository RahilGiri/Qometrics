class QometricsHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;
    this.innerHTML = `
      <header>
        <div class="container nav-container">
          <a href="/" class="logo">Qometrics<span>Tech</span></a>
          <button class="mobile-menu-btn" aria-label="Toggle menu">☰</button>
          <nav class="nav-links" id="main-nav">
            <a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}">Home</a>
            <a href="/about" class="nav-link ${currentPath.includes('/about') ? 'active' : ''}">About</a>
            <a href="/services" class="nav-link ${currentPath.includes('/services') ? 'active' : ''}">Services</a>
            <a href="/solutions" class="nav-link ${currentPath.includes('/solutions') ? 'active' : ''}">Solutions</a>
            <a href="/industries" class="nav-link ${currentPath.includes('/industries') ? 'active' : ''}">Industries</a>
            <a href="/technologies" class="nav-link ${currentPath.includes('/technologies') ? 'active' : ''}">Technologies</a>
            <a href="/portfolio" class="nav-link ${currentPath.includes('/portfolio') ? 'active' : ''}">Portfolio</a>
            <a href="/resources" class="nav-link ${currentPath.includes('/resources') ? 'active' : ''}">Resources</a>
            <a href="/careers" class="nav-link ${currentPath.includes('/careers') ? 'active' : ''}">Careers</a>
            <a href="/lets-talk" class="btn-primary mobile-only" style="margin-top: 2rem;">Let's Talk</a>
          </nav>
          <a href="/lets-talk" class="btn-primary desktop-only">Let's Talk</a>
        </div>
      </header>
    `;

    // Add mobile menu toggle logic
    setTimeout(() => {
      const btn = this.querySelector('.mobile-menu-btn');
      const nav = this.querySelector('#main-nav');
      if(btn && nav) {
        btn.addEventListener('click', () => {
          nav.classList.toggle('mobile-active');
          btn.innerHTML = nav.classList.contains('mobile-active') ? '✕' : '☰';
        });
      }
    }, 0);
  }
}

class QometricsFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="/" class="logo" style="margin-bottom: 1rem;">Qometrics<span>Tech</span></a>
              <p class="text-muted" style="margin-bottom: 1.5rem;">Engineering Tomorrow’s Digital Infrastructure. We build scalable software products, intelligent automation systems, and future-ready digital ecosystems.</p>
              <div class="social-links" style="display:flex; gap: 1rem;">
                <a href="https://www.linkedin.com/company/qometrics-tech/" target="_blank" rel="noopener noreferrer" class="text-muted hover-neon">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 class="footer-heading">Company</h4>
              <div class="footer-links">
                <a href="/about" class="footer-link">About Us</a>
                <a href="/careers" class="footer-link">Careers</a>
                <a href="/case-studies" class="footer-link">Case Studies</a>
                <a href="/contact" class="footer-link">Contact</a>
              </div>
            </div>
            <div>
              <h4 class="footer-heading">Services</h4>
              <div class="footer-links">
                <a href="/services#software" class="footer-link">Software Dev</a>
                <a href="/services#ai" class="footer-link">AI & ML</a>
                <a href="/services#cloud" class="footer-link">Cloud Engineering</a>
                <a href="/services#cybersecurity" class="footer-link">Cybersecurity</a>
              </div>
            </div>
            <div>
              <h4 class="footer-heading">Offices</h4>
              <div class="footer-links">
                <span class="text-muted">California HQ</span>
                <span class="text-muted">Global Operations</span>
                <a href="/lets-talk" class="text-neon" style="margin-top: 1rem; display: inline-block;">Book a Call &rarr;</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>&copy; 2026 QometricsTech. All rights reserved.</span>
            <div style="display:flex; gap:1rem;">
              <a href="#" class="footer-link">Privacy Policy</a>
              <a href="/terms-and-conditions" class="footer-link">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('qometrics-header', QometricsHeader);
customElements.define('qometrics-footer', QometricsFooter);

// Custom Cursor & Interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Setup cursor
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  const cursorOutline = document.createElement('div');
  cursorOutline.className = 'cursor-outline';
  
  const isDesktop = window.matchMedia('(hover: hover)').matches && window.innerWidth > 768;
  if (isDesktop) {
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
  }

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Slight delay for outline for trailing effect
    setTimeout(() => {
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    }, 50);
  });

  // Add hover effect for clickable elements
  const interactables = document.querySelectorAll('a, button, input, textarea, select, .glass-card');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load
});
