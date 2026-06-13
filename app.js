/* Menu Click */
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.header nav');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('clicked');
  nav.classList.toggle('active');
})
