const burg = document.querySelector(".burg");
const navMenu = document.querySelector(".nav-menu");
const ChangeLang = document.querySelector("#change-language");
const LanguagesAvailable = document.querySelector(".choose-language");
const allLangs = document.querySelector(".all-langs");

burg.addEventListener("click", () => {
    burg.classList.toggle("active");
    navMenu.classList.toggle("active");
})


ChangeLang.addEventListener("click" , () => {
    LanguagesAvailable.classList.toggle("active");

})



//* nhghjbyuj *//
document.querySelectorAll(".a , .all-langs-a ").forEach(n => n. addEventListener("click" , () => {
        burg.classList.remove("active");
        navMenu.classList.remove("active");
        LanguagesAvailable.classList.remove("active");
    }))
    
    