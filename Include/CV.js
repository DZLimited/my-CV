
let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
     let top=window.scrollY;
     let offset=sec.offsetTop-150;
     let height=sec.offsetHeight;
     let id=sec.getAttribute('id');
     
     if(top >= offset && top < offset+height){
        navlinks.forEach(links=>{
           links.classList.remove('active');
           document.querySelector('header nav a[href*='+id+']').classList.add('active');
        });
     }

    });
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);
// --------------------------
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}
// --------------------------
let menuIcon=document.querySelector('#menuicon');
let navbar=document.querySelector('.navbar');
  
    menuIcon.onclick = () =>{
      menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');

    };
// ------------------------
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay :200
    });
    ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
    ScrollReveal().reveal('.home-content h1, .aboutimg', { origin:'left' });
    ScrollReveal().reveal('.home-content p, .aboutcontent', { origin:'right' });
    
// -----------------------
const typed=new Typed('.multipletext',{
   strings:['Frontend Developer','Android Developer','Graphic Designer'],
   typeSpeed:50,
   backSpeed:50,
   backDelay:100,
   loop: true
});