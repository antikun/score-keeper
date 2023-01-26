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

btnOne.addEventListener("click", () => {
    if (!isGameOver) {
        clicksOne++;
        scoreOne.textContent = clicksOne;
    } if (clicksOne == winningScore) {
        isGameOver = true;
        scoreOne.classList.add("green");
        scoreTwo.classList.add("red");
        btnOne.classList.add("inactive-green");
        btnTwo.classList.add("inactive-blue");
    }
});

btnTwo.addEventListener("click", () => {
    if (!isGameOver) {
        clicksTwo++;
        scoreTwo.textContent = clicksTwo;
    } if (clicksTwo == winningScore) {
        isGameOver = true;
        scoreTwo.classList.add("green");
        scoreOne.classList.add("red");
        btnOne.classList.add("inactive-green");
        btnTwo.classList.add("inactive-blue");
    }
});

function reset() {
    isGameOver = false;
    clicksOne = 0;
    clicksTwo = 0;
    scoreOne.textContent = clicksOne;
    scoreTwo.textContent = clicksTwo;
    scoreTwo.classList.remove("green", "red");
    scoreOne.classList.remove("red", "green");
    btnOne.classList.remove("inactive-green");
    btnTwo.classList.remove("inactive-blue");
}

winningScoreSelect.addEventListener("change", () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

resetBtn.addEventListener("click", reset);
