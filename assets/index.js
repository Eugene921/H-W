const navMenu = document.getElementById('nav_menu');
window.addEventListener('scroll', () => {
  const viveHeight = window.innerHeight > 1300 ? 1300 : window.innerHeight;
  
  if(viveHeight < 70 + window.pageYOffset) {
    navMenu.classList.add('nav_menu_white');
  } else {
    navMenu.classList.remove('nav_menu_white');
  }
})
