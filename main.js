const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-link li')

window.addEventListener('scroll', () => {
    if (this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.removed('scrolled')
    }
})

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})


navLinkLi.forEach(li => li.addEventListener('click', ()=>{
    navLinkLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLink.classList.remove('active')
}))
// typed js

var typed = new Typed('#hero-title', {
    strings: [
        'web development', 
        'penetration testing .'
    ],
    typeSpeed: 10,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 10,
    backDelay: 70,
  });

//   aos
AOS.init();
