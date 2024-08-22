'use strict';

// add events on multi elements

const addEventOnElement = function(elements,eventype,callback){
  for(let i = 0, len = elements.length;i<len;i++
    ){
        elements[i].addEventListener(eventype,callback);
    }

}

// Navbar toogle for mobile version

const navbar = document.querySelector('[data-navbar]')

const navToggleBtn = document.querySelector('[data-nav-toggle-btn]')

const   overlay = document.querySelector('[data-overlay]')

const toggleNavbar = function(){
    navbar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    overlay.classList.toggle('active')
    document.body.classList.toggle('nav-active');
};

addEventOnElement([navToggleBtn,overlay],'click',toggleNavbar);


// Parallax effect

const parallaxElements = document.querySelectorAll("[data-parallax")

window.addEventListener("mousemove", event =>{
    for(let i = 0,len = parallaxElements.length; i < len ; i++){
        
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed);

        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed)

        parallaxElements[i].animate({
            transform:`translate(${movementX}px,${movementY}px)`
        },{duration:500,fill:"forwards"});
    }
})

// CURSOR 

const links = document.querySelectorAll("a")

const cursorDot = document.querySelector("[data-cursor-dot]");

const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left :`${posX}px`,
        top :`${posY}px`,
    },{duration:500,fill:"forwards"});

    links.forEach(link=>{
        link.addEventListener("mouseenter",()=>{
            cursorOutline.classList.add("cursor") ;
        } );
        link.addEventListener("mouseleave",()=>{
            cursorOutline.classList.remove("cursor")
        });
    })
})


// scrolling navbar

document.addEventListener("scroll", ()=>{
    const header = document.querySelector("[data-header]");
    if(window.scrollY > 0){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled")
    }
})

// gsap
gsap.from(".bg-title",{duration:1,y:"-100%",ease:"bounce"})
gsap.from(".section-text",{delay:0.3,duration:1,y:"-100%",ease:"bounce"})


    