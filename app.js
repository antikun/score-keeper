const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
const scoreOne = document.querySelector("#score-one");
const scoreTwo = document.querySelector("#score-two");
const winningScoreSelect = document.querySelector("#winning-score");
const resetBtn = document.querySelector("#reset");

let clicksOne = 0;
let clicksTwo = 0;
let winningScore = winningScoreSelect.value;
let isGameOver = false;

// function disableButtons() {
//     btnOne.setAttribute("disabled", "");
//     btnTwo.setAttribute("disabled", "");
// }

btnOne.addEventListener("click", () => {
    if (!isGameOver) {
        clicksOne++;
        scoreOne.textContent = clicksOne;
    } if (clicksOne == winningScore) {
        isGameOver = true;
    }
});

btnTwo.addEventListener("click", () => {
    if (!isGameOver) {
        clicksTwo++;
        scoreTwo.textContent = clicksTwo;
    } if (clicksTwo == winningScore) {
        isGameOver = true;
    }
});

function reset() {
    isGameOver = false;
    clicksOne = 0;
    clicksTwo = 0;
    scoreOne.textContent = clicksOne;
    scoreTwo.textContent = clicksTwo;
    btnOne.removeAttribute("disabled");
    btnTwo.removeAttribute("disabled");
}

winningScoreSelect.addEventListener("change", () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

resetBtn.addEventListener("click", reset);
