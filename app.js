'use strict';

console.log(document);

let h1El = document.getElementsByTagName('h1');
console.log(h1El[0]);

h1El[0].textContent = "hello world";



let pEl = document.getElementsByTagName('p');
console.log(pEl);

pEl[0].textContent = "hiiiiiii";

console.log(pEl[0]);

const parEl = document.getElementById('par');
console.log(parEl)
parEl.textContent = "hhhiiii";

const divEl = document.getElementsByClassName('container');
console.log(divEl)
divEl[0].textContent = "it is a container";


pEl[1].style.color = "red";
pEl[1].style.backgroundColor = "black";

h1El[0].style.backgroundColor = "yellow";



//document.querySelector("p").classList.add('design')

pEl[0].classList.add('design');



h1El[0].classList.add('design');

pEl[0].className = "design";

pEl[2].className = "design";
pEl[2].classList.add('design');



const h2El = document.createElement('h2');
console.log(h2El)


h2El.textContent = "h2 element";

divEl[0].appendChild(h2El);



const body = document.getElementById('body');
body.appendChild(h2El)



// document.querySelect('p').classList.add('design');




let p = document.querySelectorAll("p");
for (let index = 0; index < p.length; index++) {
    p[index].classList.add("design");
    
}


const imgEl = document.createElement('img');

imgEl.src = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg";
imgEl.alt="coffe picture";

body.appendChild(imgEl);










