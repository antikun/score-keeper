const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const scoreOne = document.querySelector("#scoreOne");
const scoreTwo = document.querySelector("#scoreTwo");
const winningScoreSelect = document.querySelector("#winningScore");
const resetBtn = document.querySelector("#reset");

let clicksOne = 0;
let clicksTwo = 0;
let winningScore = winningScoreSelect.value;

function disableButtons() {
    btnOne.setAttribute("disabled", "");
    btnTwo.setAttribute("disabled", "");
}

btnOne.addEventListener("click", () => {
    if (clicksOne < winningScore) {
        clicksOne += 1;
        scoreOne.textContent = clicksOne;
    }
    if (clicksOne == winningScore) {
        disableButtons();
    }
});

btnTwo.addEventListener("click", () => {
    if (clicksTwo < winningScore) {
        clicksTwo++;
        scoreTwo.textContent = clicksTwo;
    }
    if (clicksTwo == winningScore) {
        disableButtons();
    }
});

function reset() {
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
