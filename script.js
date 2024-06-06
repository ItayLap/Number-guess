
let hint = document.querySelector(".hint");

let items = document.querySelector(".items");

let number = document.querySelector(".number");

let check = document.querySelector(".check");

let newGame = document.querySelector(".new-game");

let attempts = 10;

// let hidenNumber = numbers.random[numbers]

let hidenNumber = getRandomNumber(1, 100);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

check.addEventListener("click", function () {

    number.focus();
    if (attempts == 0) {
        number.disabled = true;
        check.disabled = true;
    }
    let userNumber = number.value;
    if (hidenNumber == userNumber) {
        hint.innerHTML = "correct you won";
        number.disabled = true;
        check.disabled = true;
    }
    if (hidenNumber > userNumber) {
        hint.innerHTML = "your number to low";

    }
    if (hidenNumber < userNumber) {
        hint.innerHTML = "your number to high";

    }
    attempts = attempts - 1;
    number.value = "";
    items.innerHTML = attempts;
});
newGame.addEventListener("click", function () {
    hidenNumber = getRandomNumber(1, 1);
    attempts = 10;
    items.innerHTML = attempts;
    hint.innerHTML = "new game";
    number.disabled = false;
    check.disabled = false;
    number.value = "";
    number.focus();

});
