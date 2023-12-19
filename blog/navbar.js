// navbar.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch the navbar.html content and insert it into the <header> element
    fetch('navbar.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('.nav-menu-wrap').innerHTML = html;
      });
  });
  