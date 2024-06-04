const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};


// https://www.virginatlantic.com/in/en?cm_mmc=10.10.00.17.12.00.205&gad_source=1&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA8rlavsC_iddP6qabKfN0qtLeHoqJmogJVDqwm9D6nhhYJHO-nmxuMaAlBEEALw_wcB&gclsrc=aw.ds
// https://www.virginatlantic.com/in/en
// https://www.traveltoindia.org/


const loginForm = document.querySelector('.login-form');
const popup = document.querySelector('#popup');
const closeButton = document.querySelector('#close-button');
const loginBtn  = document.querySelector('#LOG');
const closeLoginForm = document.querySelector('.cutIcon');
const overlay = document.querySelector('.overlay');
const home = document.querySelector('.home')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  popup.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});


loginBtn.addEventListener('click', () =>{
  loginForm.style.display = 'block';
  overlay.style.display = 'block';
});
closeLoginForm.addEventListener('click', () =>{
  loginForm.style.display = 'none';
  overlay.style.display = 'none';
});

window.addEventListener('click', (e) =>{
  if(e.target === loginForm || e.target === overlay){
    loginForm.style.display = 'none';
    overlay.style.display = 'none';

    
  }
});
