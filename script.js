// Script for handling the burger menu toggle
window.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('change', function () {
      document.body.classList.toggle('menu-open');
    });
  });
  