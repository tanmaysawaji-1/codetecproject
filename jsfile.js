// script file

var menuBtn = document.querySelector('.menu-btn');
var navbarLinksWrapper = document.querySelector('.navbar-links');
var navbarLinks = document.querySelectorAll('.navbar-links li a');

menuBtn.addEventListener('click',toggleMenu);
//function for toggling menu button and menu
function toggleMenu(){
    menuBtn.classList.toggle('active');
    navbarLinksWrapper.classList.toggle('active');
}

for(var i=0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener('click',toggleMenu);
}
// code to show/hide menu when scrolling
var homeSection =document.querySelector('#home');
window.addEventListener('scroll' , pageScrollFunction);
window.addEventListener('load' , pageScrollFunction);
function pageScrollFunction(){
    if(window.scrollY > 140){
        homeSection.classList.add('active');
    }else{
        homeSection.classList.remove('active');
    }
}