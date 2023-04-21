numbers=[1,2,3,4,5,6]
// 1.foreach==anonymous function==============================

// e=>value
// v=>index
// i=>array


// numbers.forEach(function(e,v,i){
//     console.log(e,v,i)
// });

// numbers.forEach(function(arr){
//     console.log(arr)
// });

// 2.forEach==named function==============================

// ------------------- outside forEach-------------------------
// function printl(e) {
//     console.log(e)
// }
// numbers.forEach(printl)

// ------------------inside forEach------------------
// numbers.forEach(function printl(e){
//     console.log(e*2)
// })

// 3.forEach==arrow function=============================

// numbers.forEach(e=>
//     console.log(e+1))

// 4.forEach==variable function==========================

// -------------outside forEach----------------
// myfun=function(e){
// console.log(e);
// }
// numbers.forEach(myfun)

// --------------inside forEach--------------
// numbers.forEach(myfun=function(e){
//     console.log(e-1)
// })


