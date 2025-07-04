document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message!');
  });
  