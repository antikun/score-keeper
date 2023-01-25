const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const score = document.querySelector("#score");
const rounds = document.querySelector("#rounds");

let pointsOne = 0;
let pointsTwo = 0;
let totalPoints = pointsOne + pointsTwo;

btnOne.addEventListener("click", (e) => {
    e.preventDefault();
    pointsOne++
    score.textContent = `${pointsOne} to ${pointsTwo}`;
});

btnTwo.addEventListener("click", (e) => {
    e.preventDefault();
    pointsTwo++
    score.textContent = `${pointsOne} to ${pointsTwo}`;
});

rounds.addEventListener("change", () => {
    let totalRounds = rounds.value;
    if (totalRounds === totalPoints) {
        btnOne.setAttribute("disabled", "");
        btnTwo.setAttribute("disabled", "");
    }
})