const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector("#pid");
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
h1.getAttribute('pantalla');
h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456";

const img = document.createElement("img");
img.setAttribute("src", 'https://cdn.cloudflare.steamstatic.com/steam/apps/322170/capsule_616x353.jpg?t=1624472273');
console.log(img);

pid.append(img);