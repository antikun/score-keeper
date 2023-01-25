const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const score = document.querySelector("#score");
const roundsTotal = document.querySelector("#rounds");

let pointsOne = 0;
let pointsTwo = 0;

btnOne.addEventListener("click", (e) => {
    e.preventDefault();
    pointsOne++
    score.textContent = `${pointsOne} to ${pointsTwo}`;
});



