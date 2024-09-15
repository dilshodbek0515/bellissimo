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


// N2
// function reverseWords(str) {

//     let words = str.split(' ');
//     let result = [];
  
//     for (let i = 0; i < words.length; i++) {
//       let reversedWord = '';

//       for (let j = words[i].length - 1; j >= 0; j--) {
//         reversedWord += words[i][j];
//       }
  
//         result.push(reversedWord);
//     }
//     return result.join(' ');
//   }
  
//   console.log(reverseWords("This is an example!")); 
  
  
// N3

// const reverseSeq = n => {
//     const result = [];
    
//     for (let i = n; i >= 1; i--) {
//       result.push(i);
//     }
  
//     return result;
//   };
  
//   console.log(reverseSeq(5));


// N4

// function reverseList(list) {
//     const reversed = [];
    
//     for (let i = list.length - 1; i >= 0; i--) {
//       reversed.push(list[i]);
//     }
  
//     return reversed;
//   }
  
//   console.log(reverseList([1, 2, 3, 4]));



// N5

// function reverse(string) {
    
//     return string.split(' ').filter(word => word !== '').reverse().join(' ');          
//   }
  
//   console.log(reverse("Hello World"));



// N6

// function digitize(n) {
//     return String(n).split('').map(Number).reverse();
//   }

//   console.log(digitize(35231));



// N7

// function reverseWords(str) {

//     const words = str.split(' ');
//     const reversedWords = [];
  

//     for (let i = words.length - 1; i >= 0; i--) {
//       reversedWords.push(words[i]);
//     }
  
//     return reversedWords.join(' ');
//   }
  
//   console.log(reverseWords("The greatest victory is that which requires no battle")); 

// N8

// const items = [];
// items.push({a: "b", c: "d"});
// console.log(items);  
