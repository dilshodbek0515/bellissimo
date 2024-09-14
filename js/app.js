// login
const kirishEL = document.querySelector(".kirish")

function kirishEl() {
    kirishEL.style.display = "block";
}
function chiqishEl() {
    kirishEL.style.display = "none";
}

// swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});