// DOM Elements
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav--link');


// SHOW MENU
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})

// HIDE MENU
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

// REMOVE MENU MOBILE
navLink.forEach(link => link.addEventListener('click', linkAction))

function linkAction() {
  navMenu.classList.remove('show-menu')
}