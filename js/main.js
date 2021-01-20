const showMenu =(toggleId,navId) =>{
    const toggle=document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            console.log("menu presionado");
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toogle','nav-menu');

/* activar seccion y quitar menu*/

const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    //link seleccionado
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/*=animacion scroll*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*scroll home*/
sr.reveal('.home_titulo',{}); 
sr.reveal('.boton',{delay: 200}); 
sr.reveal('.home_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 

/*scroll about*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*acroll skills*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200}); 

/*scroll projects*/
sr.reveal('.project_img',{interval: 200}); 

/*scroll contact*/
sr.reveal('.contact_input',{interval: 200}); 