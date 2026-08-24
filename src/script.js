document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Dark Mode Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // Check local storage or system preference
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
