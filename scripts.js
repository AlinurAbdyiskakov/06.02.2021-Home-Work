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
let example1 = document.querySelector("#example1");
example1.style.backgroundColor = 'rgb(253, 76, 45)';
example1.style.color = 'balck';
example1.style.fontSize = '20px';
example1.style.border = '2px solid yellow'


let h1 = document.querySelector('h1');
example2.addEventListener('click', function () {
    h1.style.fontSize = (Infinity);

})
example4.addEventListener('click', function () {
    let number = parseInt(h1.innerText);
    number++;
    h1.innerText = number;
})

    var fontSize = ["infinite"];
    var b = 0;
    document.querySelector("#example2").addEventListener("click",function(){
        b = b < fontSize.length ? ++b : 0;
        document.querySelector("h1").style.fontSize = fontSize[b];
    })


example5.addEventListener('click', function () {
    let number = parseInt(h1.innerText);
    number--;
    h1.innerText = number;
})
let input = document.querySelector('#example2');
input.addEventListener('click',function(){
    h1.innerText=input.value;
})