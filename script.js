    // ── MOBILE NAV ──
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ── SCROLL ANIMATIONS ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // ── HERO BADGE ANIMATE ON LOAD ──
    window.addEventListener('load', () => {
      document.querySelectorAll('#hero .fade-up').forEach(el => {
        el.classList.add('visible');
      });
    });

    // ── CONTACT FORM STUB ──
    function handleSubmit() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
      }
      document.getElementById('formMsg').style.display = 'block';
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }

    // ── ACTIVE NAV HIGHLIGHT ──
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 100;
      sections.forEach(sec => {
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          document.querySelectorAll('.nav-links a').forEach(a => {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + sec.id) a.style.color = 'var(--accent)';
          });
        }
      });
    });
  