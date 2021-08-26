
// Menu Responsive, abrir al hacer click
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);
const nav = document.querySelector(".nav");

function navToggle() {
   navToggler.classList.toggle("active");
   
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
       //nav.style.maxHeight = nav.scrollHeight + "px";
       nav.style.maxHeight = 207 + "px";
   }
   else{
       nav.removeAttribute("style");
   }
} 


// El menú de navegación lateral se cierra cuando se hace clic en los enlaces de navegación
let navLinks = document.querySelectorAll(".nav ul li a");

for (var i = 0; i < navLinks.length; i++) {
    
    navLinks[i].addEventListener("click", ()=>{
        navToggler.classList.toggle("active");
        nav.classList.toggle("open");
        if(nav.classList.contains("open")){
            //nav.style.maxHeight = nav.scrollHeight + "px";
            nav.style.maxHeight = 207 + "px";
        }
        else{
            nav.removeAttribute("style");
        }
    });
    
}


/* INICIO : EFECTO TIPEO*/

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 20,
    backDelay: 2000,
    loop: true,

});


/* Swipper */


var swiper = new Swiper('.swiper-1', {

    direction: 'horizontal',
    loop: true,
    speed: 1000,

    //loopedSlides: null,

    slidesPerView: 2,
    spaceBetween: 30,
    
    pagination: 
      {
          el: '.swiper-pagination',
      }, 
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    breakpoints: {

        1300:{
            slidesPerView: 6,
        },

        720:{
            slidesPerView: 4,
        },
        
    },  
      
})

/* Formulario Ajax */

$('#contact-form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "enviar.php",
        data: $(this).serialize(),		
        success: function(data){
            $('#result').html(data);
        }					
    });
});


