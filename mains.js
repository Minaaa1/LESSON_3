//     #1 Повторить самостоятельно все, что было показано в уроке.


//   innerHTML - перезаписывает содержимое элемента 
//   document  - обращение к нашему документу (JS_Tasks) 
//   querySelector - обращение к одному из элементов (id, class, p, etc...)
//   . - обращение к class
//   # - обращение к id



// EXAMPLE :
document.querySelector("#two").innerHTML = "Smm"

// Можно перезаписывать сколько угодно как переменную let :  let a = 5; a = 8;

// document.querySelector("#two").innerHTML = '<h1> Something else </h1>' 
// document.querySelector("#two").innerHTML = 'jggjgj' 
// document.querySelector("#two").innerHTML = ' 666 ' 
//                      /\
//                      ||
// В результате : 666 (в заголовке, предыдущие варианты стираются {Something else, jggjgj})



// не работает (почему ???): 
/* 
let btn_1 = querySelector('.btn'); // ReferenceError: querySelector is not defined
let text_toWrite = querySelector('.write');

btn_1.onclick = function() {
//console.log('works!');
console.log(text_toWrite.value);

} 
 */


//     #2 С помощью оператора if else сделать проверку: если число больше 100 – вывод на страницу, если число меньше 100 - вывод числа в консоль.

let num = prompt("Write number:");
let div = document.querySelector(".out")
if(num > 100) {
    div.innerHTML = num
}
else {
    console.log(num);
}
