const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }else{
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});

/* ==========================================
   HEADER SCROLL
========================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";

    }

});

/* ==========================================
   HERO SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");

if(slides.length > 0){

    let current = 0;

    slides[current].classList.add("active");

    setInterval(()=>{

        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");

    },5000);

}

/* ==========================================
   DROPDOWN MOBILE
========================================== */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown=>{

    const link = dropdown.querySelector("a");

    link.addEventListener("click",(e)=>{

        if(window.innerWidth <= 768){

            e.preventDefault();

            dropdown.classList.toggle("active");

        }

    });

});

/* ==========================================
   TUTUP MENU SAAT KLIK LINK
========================================== */

document.querySelectorAll("#menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(window.innerWidth <= 768){

            // jangan tutup jika membuka dropdown
            if(link.parentElement.classList.contains("dropdown")){
                return;
            }

            menu.classList.remove("active");

            toggle.classList.remove("fa-xmark");
            toggle.classList.add("fa-bars");

        }

    });

});

/* ==========================================
   TUTUP MENU SAAT KLIK DI LUAR
========================================== */

document.addEventListener("click",(e)=>{

    if(window.innerWidth > 768) return;

    if(
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
    ){

        menu.classList.remove("active");

        toggle.classList.remove("fa-xmark");
        toggle.classList.add("fa-bars");

    }

});

/* ==========================================
   RESET SAAT RESIZE
========================================== */

window.addEventListener("resize",()=>{

    if(window.innerWidth > 768){

        menu.classList.remove("active");

        toggle.classList.remove("fa-xmark");
        toggle.classList.add("fa-bars");

        dropdowns.forEach(dropdown=>{
            dropdown.classList.remove("active");
        });

    }

});
