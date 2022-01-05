// DOM Elements
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav--link')
const skillsContent = document.getElementsByClassName('skills--content')
const skillsHeader = document.querySelectorAll('.skills--header')
// Qualifications
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

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

// VIEWS SKILLS
skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

function toggleSkills() {
  let itemsClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills--content skills--close'
  }

  if (itemsClass === 'skills--content skills--close') {
    this.parentNode.className = 'skills--content skills--open'
  }
}

// WORK WITH QUALIFICATION TABS
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
  
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification--active')
    })
    target.classList.add('qualification--active')
  
    tab.forEach(tab => {
      tab.classList.remove('qualification--active')
    })
    tab.classList.add('qualification--active')
  })
})