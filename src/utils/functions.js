
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});
