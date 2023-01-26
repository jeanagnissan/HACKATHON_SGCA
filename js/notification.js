

let array = document.getElementsByClassName("alert");
console.log(array)





setInterval(() => {
    for (const iterator of array) {
        console.log(iterator)
    }
        
}, 3000);



// for (const key in array) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element)
        
//     }
// }

// array.forEach(element => {
//     console.log(element)
// });

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
    
// }