// let click = document.querySelector("#click");
// let h1 = document.querySelector("h1");
// let sayHello = document.querySelector("#hello");
// let input = document.querySelector("#chenge");


// click.addEventListener('click', function () {
//     h1.innerText = "Hello java scripts"
// })
// sayHello.addEventListener('click', function () {
//     h1.innerText = "Hello User"
// })
// input.addEventListener('change', function () {
//     h1.innerText = input.value;
// })
// color.querySelector('change',function (){
//     h1.style.color=color.value
// })
let h1 =document.querySelector('h1');
example2.addEventListener('click',function(){
    h1.style.fontSize = (Infinity);
   
})
example4.addEventListener('click',function(){
    let number = parseInt(h1.innerText);
    number++;
    h1.innerText =number;
})
example5.addEventListener('click',function(){
    let number = parseInt(h1.innerText);
    number--;
    h1.innerText =number;
})