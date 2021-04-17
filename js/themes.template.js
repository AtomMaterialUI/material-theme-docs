document.addEventListener('DOMContentLoaded', () => {
  let s = document.getElementById('themes');
  if (s) {
    s.remove();
  }

  // Insert a style tag into the wrapper view
  s = document.createElement('style');
  s.type = 'text/css';
  s.innerHTML = `{{themesCSS}}`;
  s.id = 'themes';
  document.head.appendChild(s);
});

window.jekyllAppThemes = @@themes;
