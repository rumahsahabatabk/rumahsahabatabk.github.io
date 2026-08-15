const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    }else{
        header.style.background = "#fff";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";
    }
});

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
    let current = 0;

    slides[current].classList.add("active");

    setInterval(() => {
        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");
    }, 5000);
}

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const link = dropdown.querySelector("a");

    link.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();

            dropdown.classList.toggle("active");

        }

    });

});