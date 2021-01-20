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