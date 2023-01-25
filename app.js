const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const pointsOne = document.querySelector(".pointsOne");
const pointsTwo = document.querySelector(".pointsTwo");
const winningScore = document.querySelector("#winningScore");
const resetBtn = document.querySelector("#reset");

let clicksOne = 0;
let clicksTwo = 0;

btnOne.addEventListener("mousedown", () => {
    if (clicksOne < winningScore.value) {
        clicksOne += 1;
        pointsOne.textContent = clicksOne;
    }
    if (clicksOne == winningScore.value) {
        btnOne.setAttribute("disabled", "");
        btnTwo.setAttribute("disabled", "");
    }
});

btnTwo.addEventListener("mousedown", () => {
    if (clicksTwo < winningScore.value) {
        clicksTwo++;
        pointsTwo.textContent = clicksTwo;
    }
    if (clicksTwo == winningScore.value) {
        btnOne.setAttribute("disabled", "");
        btnTwo.setAttribute("disabled", "");
    }
});

resetBtn.addEventListener("click", () => {
    clicksOne = 0;
    clicksTwo = 0;
    pointsOne.textContent = clicksOne;
    pointsTwo.textContent = clicksTwo;
    btnOne.toggleAttribute("disabled");
    btnTwo.toggleAttribute("disabled");
});
