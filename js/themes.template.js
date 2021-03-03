document.addEventListener('DOMContentLoaded', () => {
  let s = document.getElementById('themes');
  if (s) {
    s.remove();
  }

  // Insert a style tag into the wrapper view
  s = document.createElement('style');
  s.type = 'text/css';
  s.innerHTML = `{{themes}}`;
  s.id = 'themes';
  document.head.appendChild(s);
});
