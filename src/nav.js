const navSlide = () => {
    const hamBurger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // Toggle Nav
    hamBurger.addEventListener('click',()=>{


        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.75}s`;
            }
        });

        hamBurger.classList.toggle('toggle');
    })

}
navSlide();