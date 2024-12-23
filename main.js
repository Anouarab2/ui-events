/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...

let changeColor = document.querySelector('a:nth-of-type(1)')

changeColor.addEventListener('click', colorChange)

function colorChange() {
  changeColor.classList.toggle('colorChange')
}


let scaleLink = document.querySelector('a:nth-of-type(2)')

scaleLink.addEventListener('mouseover', linkScale)

function linkScale(){
scaleLink.classList.toggle('linkScale')
}



let bibber = document.querySelector('a:nth-of-type(3)')

bibber.addEventListener('click', bibberLink)

function bibberLink(){
  bibber.classList.toggle('bibber')
}

bibber.addEventListener('animationend', bibberLink)



//selecteer het element
let rotate = document.querySelector('a:nth-of-type(4)')

// voeg een event toe
rotate.addEventListener('click', rotateLink)

// benoem de functie
function rotateLink(){
  rotate.classList.toggle('rotate')
}

//haal de class weg na de animatie
rotate.addEventListener('animationend', rotateLink)



// selecteer het element 
let move = document.querySelector('a:nth-of-type(5)')

// voeg een event toe 
move.addEventListener('mouseover', moveLink)

// benoem de functie 
function moveLink(){
  move.classList.toggle('move')
}

// haal de class weg na de animatie 
move.addEventListener('animationend', moveLink)



//selecteer het element
let remove = document.querySelector('a:nth-of-type(6)')

//voeg een event toe
remove.addEventListener('dblclick', removeLink)

//benoem de functie
function removeLink(){
  remove.classList.toggle('hide')
}



// let color = document.querySelector('a:nth-of-type(7)')

// color.addEventListener('wheel', colorLink)

// function colorLink(){
//   color.classList.toggle('color')
// }


