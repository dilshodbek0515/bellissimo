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



// N1

// {
//     function isAllCaps(str) {
//         return str.toUpperCase() === str;
//     }
//     console.log(isAllCaps("c"));
//     console.log(isAllCaps("C"));
//     console.log(isAllCaps("hello I AM DONALD"));
//     console.log(isAllCaps("HELLO I AM DONALD"));
//     console.log(isAllCaps("ACSKLDFJSgSKLDFJSKLDFJ"));
//     console.log(isAllCaps("ACSKLDFJSGSKLDFJSKLDFJ"));
//     console.log(isAllCaps(""));
// }